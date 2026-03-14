#!/usr/bin/env node

/**
 * AI 친화성 점수 측정 도구 (개선판)
 *
 * 실제 개발 현실에 맞는 지표로 AI 코드 품질 평가
 *
 * 사용 방법:
 * node scripts/measure-ai-score.js [파일경로]
 *
 * 예시:
 * node scripts/measure-ai-score.js packages/react/src/components/Button/Button.tsx
 * node scripts/measure-ai-score.js packages/hooks/src/useTheme.ts
 */

const fs = require('fs');
const path = require('path');

// 점수 측정 함수 모음 (개선판)
const scorers = {
  // 1. 코드 품질 점수 측정 (50%) - 명명 + 타입 + 구조 통합
  measureCodeQuality: (content) => {
    let score = 0;
    const maxScore = 50;

    // 1.1 명명 품질 (25점 만점)
    const namingScore = (() => {
      let score = 0;

      // 컴포넌트명 체크
      const componentPattern = /(?:const|export\s+const)\s+([A-Z][a-zA-Z]*)\s*=/g;
      const componentMatches = content.match(componentPattern) || [];
      score += Math.min(componentMatches.length * 2, 8);

      // 실용적인 변수명 패턴
      const goodPatterns = [
        { pattern: /\b(is|has|can|should)[A-Z][a-zA-Z]*\b/g, score: 1.5 },
        { pattern: /\b(set|handle|process)[A-Z][a-zA-Z]*\b/g, score: 1.5 },
        { pattern: /\b([a-z]+[A-Z][a-zA-Z]*)\b/g, score: 1 },
      ];

      goodPatterns.forEach(({ pattern, score: addScore }) => {
        const matches = content.match(pattern) || [];
        score += Math.min(matches.length * addScore, 10);
      });

      // 나쁜 패턴 패널티
      const badPatterns = [
        { pattern: /\b_[a-zA-Z]+\b/g, penalty: -1 },
        { pattern: /\ba[A-Z][a-zA-Z]*\b/g, penalty: -0.5 },
        { pattern: /\bthe[A-Z][a-zA-Z]*\b/g, penalty: -0.5 },
      ];

      badPatterns.forEach(({ pattern, penalty: subScore }) => {
        const matches = content.match(pattern) || [];
        score += matches.length * subScore;
      });

      return Math.max(0, score);
    })();

    // 1.2 타입 품질 (25점 만점)
    const typingScore = (() => {
      let score = 0;

      // 명시적 타입 사용
      const explicitTypes = [
        { pattern: /\b(string|number|boolean)\s*\?*:/g, score: 1 },
        { pattern: /\bReact\.Node\b/g, score: 2 },
        { pattern: /\b[A-Z][a-zA-Z]*Props\s*:/g, score: 3 },
      ];

      explicitTypes.forEach(({ pattern, score: addScore }) => {
        const matches = (content.match(pattern) || []).length;
        score += matches * addScore;
      });

      // 유니온 타입 사용
      const unionMatches = (content.match(/\|\s*(['"]?[a-zA-Z0-9_'"]+)+/g) || []).length;
      score += Math.min(unionMatches * 2, 10);

      // 제네릭 사용
      const genericMatches = (content.match(/<[^>]+>/g) || []).length;
      score += Math.min(genericMatches * 3, 5);

      // any/unknown 패널티
      const anyMatches = (content.match(/\bany\b/g) || []).length;
      const unknownMatches = (content.match(/\bunknown\b/g) || []).length;
      score -= (anyMatches * 2 + unknownMatches * 1);

      // 타입 정의 완도
      const interfaceCount = (content.match(/interface\s+\w+/g) || []).length;
      const typeCount = (content.match(/type\s+\w+\s*=/g) || []).length;
      score += Math.min((interfaceCount + typeCount) * 1, 5);

      return Math.max(0, score);
    })();

    // 1.3 구조 품질 (하위 합계)
    const structureScore = (() => {
      let score = 0;

      // 함수/컴포넌트 길이
      const lineCount = content.split('\n').length;
      if (lineCount < 50) score += 8;
      else if (lineCount < 100) score += 5;
      else if (lineCount < 200) score += 2;

      // 제어 구조 복잡도
      const controlStructures = (content.match(/\b(if|for|while|switch|case|try|catch)\b/g) || []).length;
      if (controlStructures <= 10) score += 5;
      else if (controlStructures <= 20) score += 3;
      else score += 1;

      // 중첩 깊이
      const openBraces = (content.match(/{/g) || []).length;
      const closeBraces = (content.match(/}/g) || []).length;
      const nestingDepth = Math.abs(openBraces - closeBraces);
      if (nestingDepth <= 5) score += 4;
      else if (nestingDepth <= 10) score += 2;

      return score;
    })();

    score = namingScore + typingScore + structureScore;
    return Math.max(0, Math.min(score, maxScore));
  },

  // 2. 유지보수성 점수 측정 (30%) - 문서 + 구조 + 일관성
  measureMaintainability: (content) => {
    let score = 0;
    const maxScore = 30;

    // 2.1 문서 품질 (20점 만점)
    const docScore = (() => {
      let score = 0;

      // JSDoc 존재 여부
      const jsdocExists = /\*\*[\s\S]*?\*\//.test(content);
      if (jsdocExists) score += 8;

      // @param 태그
      const paramMatches = (content.match(/@param\s+\w+/g) || []).length;
      score += Math.min(paramMatches * 1, 5);

      // @example 태그
      const exampleExists = /@example/.test(content);
      if (exampleExists) score += 4;

      // @returns/return 태그
      const returnMatches = (content.match(/@returns?/g) || []).length;
      score += Math.min(returnMatches * 1, 3);

      return score;
    })();

    // 2.2 구조적 유지보수성 (10점 만점)
    const structureMaintainability = (() => {
      let score = 0;

      // 의존성 개수
      const importMatches = (content.match(/^import\s+.*$/gm) || []).length;
      if (importMatches <= 10) score += 4;
      else if (importMatches <= 20) score += 2;

      // 조기 리턴 사용
      const earlyReturns = (content.match(/return\b/g) || []).length;
      score += Math.min(earlyReturns * 0.5, 3);

      // 상태 관리 분리
      if (content.includes('useState') || content.includes('useRef')) {
        score += 3;
      }

      return score;
    })();

    score = docScore + structureMaintainability;
    return Math.max(0, Math.min(score, maxScore));
  },

  // 3. 일관성 점수 측정 (20%) - 실제 일관성 자동화
  measureConsistency: (content) => {
    let score = 0;
    const maxScore = 20;

    // 3.1 이벤트 핸들러 일관성 (10점)
    const eventConsistency = (() => {
      const patterns = [
        { pattern: /handle[A-Z][a-zA-Z]*\s*\(/g, score: 3 }, // handle*
        { pattern: /on[A-Z][a-zA-Z]*\s*:/g, score: 2 }, // on*
        { pattern: /set[A-Z][a-zA-Z]*\s*\(/g, score: 2 }, // set*
      ];

      let maxPatternScore = 0;
      patterns.forEach(({ pattern, score: patternScore }) => {
        const matches = (content.match(pattern) || []).length;
        maxPatternScore = Math.max(maxPatternScore, matches * patternScore);
      });

      return Math.min(maxPatternScore, 10);
    })();

    // 3.2 상태 변수 일관성 (5점)
    const stateConsistency = (() => {
      const stateVariables = content.match(/\b(is|has|can|should)[A-Z][a-zA-Z]*\b/g) || [];
      return Math.min(stateVariables.length * 0.8, 5);
    })();

    // 3.3 Props 일관성 (5점)
    const propsConsistency = (() => {
      let score = 0;

      // boolean props 패턴
      const booleanProps = (content.match(/\b\w+\s*:\s*boolean\b/g) || []).length;
      score += Math.min(booleanProps * 1, 3);

      // 명시적 기본값 사용
      const defaultValues = (content.match(/\b\w+\s*=\s*(true|false|null|''|"")\b/g) || []).length;
      score += Math.min(defaultValues * 0.5, 2);

      return score;
    })();

    // 3.4 접근성 일관성 (加分 항목)
    const accessibilityScore = (() => {
      const accessibilityProps = (content.match(/\baria-[a-zA-Z]+\b/g) || []).length;
      return Math.min(accessibilityProps * 1, 3);
    })();

    score = eventConsistency + stateConsistency + propsConsistency + accessibilityScore;
    return Math.max(0, Math.min(score, maxScore));
  }
};

// 파일에서 내용 읽기
function readFileContent(filePath) {
  try {
    const absolutePath = path.resolve(filePath);
    return fs.readFileSync(absolutePath, 'utf8');
  } catch (error) {
    throw new Error(`파일을 읽을 수 없습니다: ${filePath}`);
  }
}

// 점수 계산 (개선판)
function calculateScore(content, filePath) {
  const codeQualityScore = scorers.measureCodeQuality(content);
  const maintainabilityScore = scorers.measureMaintainability(content);
  const consistencyScore = scorers.measureConsistency(content);

  const totalScore = Math.round(
    (codeQualityScore * 0.5) +
    (maintainabilityScore * 0.3) +
    (consistencyScore * 0.2)
  );

  // 등급 계산
  let grade;
  if (totalScore >= 90) grade = '🏆 S (최우수)';
  else if (totalScore >= 80) grade = '🟢 A (우수)';
  else if (totalScore >= 70) grade = '🟡 B+ (양호)';
  else if (totalScore >= 60) grade = '🟠 B (보통)';
  else if (totalScore >= 40) grade = '🔴 C (개선필요)';
  else grade = '⚫ D (불량)';

  // 세부 점수 계산 (기존 호환성)
  const namingScore = scorers.measureCodeQuality(content).toString().includes('naming')
    ? Math.round(codeQualityScore * 0.5)
    : Math.round(codeQualityScore * 0.5); // 단순화
  const typeScore = scorers.measureCodeQuality(content).toString().includes('typing')
    ? Math.round(codeQualityScore * 0.5)
    : Math.round(codeQualityScore * 0.5); // 단순화
  const docScore = scorers.measureMaintainability(content).toString().includes('doc')
    ? Math.round(maintainabilityScore * 0.67)
    : Math.round(maintainabilityScore * 0.67); // 단순화
  const structureScore = scorers.measureMaintainability(content).toString().includes('structure')
    ? Math.round(maintainabilityScore * 0.33)
    : Math.round(maintainabilityScore * 0.33); // 단순화

  return {
    filePath,
    totalScore,
    grade,
    newStructure: {
      codeQuality: codeQualityScore,
      maintainability: maintainabilityScore,
      consistency: consistencyScore
    },
    oldStructure: {
      naming: namingScore,
      typing: typeScore,
      documentation: docScore,
      structure: structureScore,
      consistency: consistencyScore
    },
    details: {
      naming: namingScore,
      typing: typeScore,
      documentation: docScore,
      structure: structureScore,
      consistency: consistencyScore,
      codeQuality: codeQualityScore,
      maintainability: maintainabilityScore
    }
  };
}

// 개선 제안 생성 (개선판)
function generateImprovements(score) {
  const improvements = [];
  const { codeQuality, maintainability, consistency } = score.newStructure;

  // 코드 품질 개선 제안
  if (codeQuality < 25) {
    improvements.push({
      priority: 'high',
      category: '코드 품질',
      suggestion: '변수명 개선',
      details: [
        'is/has 접두사 추가: visible → isVisible',
        '액션 함수 명명: handleClick, handleChange',
        'camelCase 일관적 사용'
      ]
    });
  }

  if (codeQuality < 25) {
    improvements.push({
      priority: 'high',
      category: '코드 품질',
      suggestion: '타입 안전성 강화',
      details: [
        'any 타입 제거',
        '명시적 타입 사용',
        '유니온 타입 활용'
      ]
    });
  }

  // 유지보수성 개선 제안
  if (maintainability < 15) {
    improvements.push({
      priority: 'medium',
      category: '유지보수성',
      suggestion: '문서화 개선',
      details: [
        'JSDoc 추가 (@param, @example 포함)',
        '컴포넌트 용도 설명 추가',
        '코드 예시 포함'
      ]
    });
  }

  if (maintainability < 10) {
    improvements.push({
      priority: 'medium',
      category: '유지보수성',
      suggestion: '구조 개선',
      details: [
        'Function length: keep under 50 lines',
        'Dependency count: keep under 10',
        'early return pattern usage'
      ]
    });
  }

  // 일관성 개선 제안
  if (consistency < 10) {
    improvements.push({
      priority: 'high',
      category: 'Consistency',
      suggestion: 'Event Handler Unification',
      details: [
        'onClick → handleClick (explicit)',
        'onChange → handleChange',
        'Same pattern across all components'
      ]
    });
  }

  if (consistency < 8) {
    improvements.push({
      priority: 'medium',
      category: 'Consistency',
      suggestion: 'State Management Standardization',
      details: [
        'boolean props: isDisabled',
        'Explicit default values',
        'State variable naming rules'
      ]
    });
  }

  // 개선 순서 정렬
  return improvements.sort((a, b) => {
    const priorityOrder = { high: 0, medium: 1, low: 2 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });
}

// 출력 형식화 (개선판)
function formatOutput(scores) {
  console.log('\n🤖 AI 친화성 점수 측정 결과 (개선판)\n');
  console.log('='.repeat(60));

  if (Array.isArray(scores)) {
    // 여러 파일 결과
    const totalScore = scores.reduce((sum, s) => sum + s.totalScore, 0) / scores.length;

    console.log(`\n📊 전체 평균 점수: ${totalScore.toFixed(1)}/100`);
    console.log(`🏆 전체 등급: ${scores[0].grade}`);
    console.log('\n📋 개별 컴포넌트 평가:\n');

    scores.forEach((score, index) => {
      console.log(`\n${index + 1}. ${score.filePath}`);
      console.log(`   ${score.grade} (${score.totalScore}/100)`);

      // 새로운 구조 표시
      console.log(`   📈 새로운 평가 구조:`);
      console.log(`   - 코드 품질: ${score.newStructure.codeQuality}/50`);
      console.log(`   - 유지보수성: ${score.newStructure.maintainability}/30`);
      console.log(`   - 일관성: ${score.newStructure.consistency}/20`);

      // 기존 구조도 표시 (호환성)
      console.log(`   📊 기존 구조 (호환):`);
      console.log(`   - 명명: ${score.oldStructure.naming}/25`);
      console.log(`   - 타입: ${score.oldStructure.typing}/25`);
      console.log(`   - 문서: ${score.oldStructure.documentation}/20`);
      console.log(`   - 구조: ${score.oldStructure.structure}/20`);
      console.log(`   - 일관성: ${score.oldStructure.consistency}/10`);
    });

    // 평균 개선 제안
    const avgImprovements = generateImprovements({
      newStructure: {
        codeQuality: scores.reduce((sum, s) => sum + s.newStructure.codeQuality, 0) / scores.length,
        maintainability: scores.reduce((sum, s) => sum + s.newStructure.maintainability, 0) / scores.length,
        consistency: scores.reduce((sum, s) => sum + s.newStructure.consistency, 0) / scores.length
      }
    });

    if (avgImprovements.length > 0) {
      console.log('\n💡 전체 개선 제안:');
      avgImprovements.forEach((imp, idx) => {
        console.log(`\n${idx + 1}. [${imp.category}] ${imp.suggestion}`);
        console.log(`   우선순위: ${imp.priority === 'high' ? '🔴 높음' : imp.priority === 'medium' ? '🟡 중간' : '🟢 낮음'}`);
        imp.details.forEach(detail => console.log(`   • ${detail}`));
      });
    }
  } else {
    // 단일 파일 결과
    const score = scores;
    console.log(`📁 파일: ${score.filePath}`);
    console.log(`\n🏆 최종 점수: ${score.totalScore}/100 ${score.grade}`);

    // 새로운 구조 표시
    console.log('\n📈 새로운 평가 구조:');
    console.log(`코드 품질: ${score.newStructure.codeQuality}/50 (50%)`);
    console.log(`유지보수성: ${score.newStructure.maintainability}/30 (30%)`);
    console.log(`일관성: ${score.newStructure.consistency}/20 (20%)`);

    // 상세 분석
    console.log('\n📊 상세 분석:');
    if (score.newStructure.codeQuality < 25) {
      console.log('⚠️  코드 품질이 낮습니다. 변수명과 타입 개선이 필요합니다.');
    }
    if (score.newStructure.maintainability < 15) {
      console.log('⚠️  유지보수성이 낮습니다. 문서화와 구조 개선이 필요합니다.');
    }
    if (score.newStructure.consistency < 10) {
      console.log('⚠️  일관성이 낮습니다. 패턴 통일이 시급합니다.');
    }

    // 개선 제안
    const improvements = generateImprovements(score);
    if (improvements.length > 0) {
      console.log('\n💡 개선 제안:');
      improvements.forEach((imp, idx) => {
        console.log(`\n${idx + 1}. [${imp.category}] ${imp.suggestion}`);
        console.log(`   우선순위: ${imp.priority === 'high' ? '🔴 높음' : imp.priority === 'medium' ? '🟡 중간' : '🟢 낮음'}`);
        imp.details.forEach(detail => console.log(`   • ${detail}`));
      });
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log('✅ 개선된 지표:\n' +
    '  • 100점 체계 도입\n' +
    '  • 세 가지 핵심 평가 지표\n' +
    '  • 구체적인 개선 제안\n' +
    '  • 우선순위 부여\n' +
    '  • 실용적 기준 적용');
}

// 메인 실행 함수
function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log('사용법: node scripts/measure-ai-score.js [파일경로] [파일경로2] ...');
    console.log('\n예시:');
    console.log('node scripts/measure-ai-score.js packages/react/src/components/Button/Button.tsx');
    console.log('node scripts/measure-ai-score.js packages/hooks/src/useTheme.ts');
    console.log('node scripts/measure-ai-score.js packages/react/src/components/Button/Button.tsx packages/hooks/src/useTheme.ts');
    process.exit(1);
  }

  const filePaths = args;
  const results = filePaths.map(filePath => {
    const content = readFileContent(filePath);
    return calculateScore(content, filePath);
  });

  formatOutput(results);

  // CI/CD를 위한 JSON 출력
  if (process.env.JSON_OUTPUT) {
    console.log('\nJSON 출력:');
    console.log(JSON.stringify(results, null, 2));
  }
}

// 스크립트 실행
if (require.main === module) {
  main();
}

module.exports = { calculateScore, scorers };