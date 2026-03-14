#!/usr/bin/env node

/**
 * 전체 패키지 AI 친화성 점수 측정 도구
 *
 * packages/react/src/components/ 디렉토리의 모든 컴포넌트를 한 번에 평가
 */

const fs = require('fs');
const path = require('path');
const { calculateScore } = require('./measure-ai-score');

// 컴포넌트 파일 경로 목록
const COMPONENT_PATHS = [
  'packages/react/src/components/Button/Button.tsx',
  'packages/react/src/components/Card/Card.tsx',
  'packages/react/src/components/Input/Input.tsx',
  'packages/react/src/components/Modal/Modal.tsx',
  'packages/react/src/components/Toast/Toast.tsx',
  'packages/react/src/components/Typography/Typography.tsx',
  // Primitive components
  'packages/primitives/src/Box/Box.tsx',
  'packages/primitives/src/Text/Text.tsx',
  'packages/primitives/src/Pressable/Pressable.tsx',
  'packages/primitives/src/Icon/Icon.tsx'
];

// 점수 측정 함수
function measureComponent(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    return calculateScore(content, filePath);
  } catch (error) {
    console.log(`⚠️ 파일을 읽을 수 없습니다: ${filePath}`);
    return null;
  }
}

// 전체 패키지 평가
function evaluatePackage() {
  console.log('🤖 전체 패키지 AI 친화성 평가를 시작합니다...\n');
  console.log('='.repeat(60));

  const results = [];
  let totalScore = 0;
  let validComponents = 0;

  // 각 컴포넌트 평가
  COMPONENT_PATHS.forEach(filePath => {
    const score = measureComponent(filePath);

    if (score) {
      results.push(score);
      totalScore += score.totalScore;
      validComponents++;
    }
  });

  if (results.length === 0) {
    console.log('❌ 평가할 컴포넌트를 찾을 수 없습니다.');
    process.exit(1);
  }

  // 전체 결과 계산
  const averageScore = Math.round(totalScore / validComponents);

  // 등급 계산
  let grade;
  if (averageScore >= 80) grade = '🟢 우수';
  else if (averageScore >= 60) grade = '🟡 보통';
  else if (averageScore >= 40) grade = '🟠 개선필요';
  else grade = '🔴 개선필요';

  // 상세 결과 출력
  console.log(`\n📊 전체 패키지 평가 결과\n`);
  console.log(`평균 점수: ${averageScore}/100 (${grade})`);
  console.log(`평가된 컴포넌트 수: ${validComponents}개\n`);

  console.log('='.repeat(60));
  console.log('\n📋 개별 컴포넌트 상세 결과:\n');

  // 정렬 (점수 높은 순)
  results.sort((a, b) => b.totalScore - a.totalScore);

  results.forEach((result, index) => {
    const emoji = getScoreEmoji(result.totalScore);
    const fileName = path.basename(result.filePath, '.tsx');
    console.log(`${index + 1}. ${fileName}`);
    console.log(`   ${emoji} ${result.totalScore}/100 (${result.grade})`);

    // 새로운 구조 표시
    console.log(`   📈 신규 평가 구조:`);
    console.log(`   코드 품질: ${result.newStructure.codeQuality}/50 | 유지보수성: ${result.newStructure.maintainability}/30 | 일관성: ${result.newStructure.consistency}/20`);

    // 기존 구조도 표시 (호환성)
    console.log(`   📊 기존 구조 (호환):`);
    console.log(`   명명: ${result.oldStructure.naming}/25 | 타입: ${result.oldStructure.typing}/25 | 문서: ${result.oldStructure.documentation}/20 | 구조: ${result.oldStructure.structure}/20 | 일관성: ${result.oldStructure.consistency}/10`);
    console.log('');
  });

  // 분석 결과
  console.log('='.repeat(60));
  console.log('\n🔍 분석 결과:\n');

  // 새로운 구조로 카테고리별 평균
  const newCategoryAverages = {
    codeQuality: results.reduce((sum, r) => sum + r.newStructure.codeQuality, 0) / validComponents,
    maintainability: results.reduce((sum, r) => sum + r.newStructure.maintainability, 0) / validComponents,
    consistency: results.reduce((sum, r) => sum + r.newStructure.consistency, 0) / validComponents
  };

  console.log('📈 신규 카테고리별 평균:');
  Object.entries(newCategoryAverages).forEach(([category, avg]) => {
    const maxScore = category === 'codeQuality' ? 50 : category === 'maintainability' ? 30 : 20;
    const bar = getProgressBar(avg, maxScore);
    const label = category === 'codeQuality' ? '코드 품질' :
                  category === 'maintainability' ? '유지보수성' : '일관성';
    console.log(`  ${label}: ${avg.toFixed(1)}/${maxScore} ${bar}`);
  });

  // 기존 구조로도 표시 (호환성)
  const oldCategoryAverages = {
    naming: results.reduce((sum, r) => sum + r.oldStructure.naming, 0) / validComponents,
    typing: results.reduce((sum, r) => sum + r.oldStructure.typing, 0) / validComponents,
    documentation: results.reduce((sum, r) => sum + r.oldStructure.documentation, 0) / validComponents,
    structure: results.reduce((sum, r) => sum + r.oldStructure.structure, 0) / validComponents,
    consistency: results.reduce((sum, r) => sum + r.oldStructure.consistency, 0) / validComponents
  };

  console.log('\n📊 기존 카테고리별 평균 (호환):');
  Object.entries(oldCategoryAverages).forEach(([category, avg]) => {
    const maxScore = category === 'naming' || category === 'typing' ? 25 : category === 'documentation' || category === 'structure' ? 20 : 10;
    const bar = getProgressBar(avg, maxScore);
    const label = category === 'naming' ? '명명' :
                  category === 'typing' ? '타입' :
                  category === 'documentation' ? '문서' :
                  category === 'structure' ? '구조' : '일관성';
    console.log(`  ${label}: ${avg.toFixed(1)}/${maxScore} ${bar}`);
  });

  // 강점 및 약점 분석
  console.log('\n🎯 강점 분석 (신규 기준):');
  const strengths = [];
  if (newCategoryAverages.codeQuality > 40) strengths.push('코드 품질 우수');
  if (newCategoryAverages.maintainability > 20) strengths.push('유지보수성 높음');
  if (newCategoryAverages.consistency > 15) strengths.push('일관성 좋음');

  if (strengths.length > 0) {
    strengths.forEach(s => console.log(`  ✅ ${s}`));
  } else {
    console.log('  ⚠️ 전반적인 개선이 필요합니다');
  }

  console.log('\n🔧 전체 개선 제안:');

  // 새로운 개선 제안 생성
  const generatePackageImprovements = (averages) => {
    const improvements = [];

    if (averages.codeQuality < 25) {
      improvements.push('코드 품질 개선: 변수명과 타입 안전성 강화');
    }
    if (averages.maintainability < 15) {
      improvements.push('유지보수성 개선: 문서화 및 구조 최적화');
    }
    if (averages.consistency < 10) {
      improvements.push('일관성 개선: 이벤트 핸들러 패턴 통일');
    }

    return improvements;
  };

  const improvements = generatePackageImprovements(newCategoryAverages);
  improvements.forEach(imp => console.log(`  💡 ${imp}`));

  // 순위별 최하위 컴포넌트
  const worstComponent = results[results.length - 1];
  console.log(`\n⚠️ 가장 개선이 필요한 컴포넌트: ${path.basename(worstComponent.filePath)} (${worstComponent.totalScore}점)`);

  // CI/CD를 위 JSON 출력
  if (process.env.JSON_OUTPUT) {
    console.log('\n📊 JSON 출력 (CI/CD용):');
    const packageResult = {
      package: 'HI Design System - React Components',
      averageScore,
      grade,
      componentCount: validComponents,
      categoryAverages,
      components: results.map(r => ({
        name: path.basename(r.filePath),
        score: r.totalScore,
        grade: r.grade
      })),
      timestamp: new Date().toISOString()
    };
    console.log(JSON.stringify(packageResult, null, 2));
  }

  console.log('\n' + '='.repeat(60));
}

// 점수 이모지 생성
function getScoreEmoji(score) {
  if (score >= 80) return '🟢';
  if (score >= 60) return '🟡';
  if (score >= 40) return '🟠';
  return '🔴';
}

// 진행바 생성
function getProgressBar(value, max) {
  const percentage = (value / max) * 100;
  const filled = Math.round(percentage / 10);
  const empty = 10 - filled;
  return '█'.repeat(filled) + '░'.repeat(empty);
}

// 메인 실행
if (require.main === module) {
  evaluatePackage();
}

module.exports = { evaluatePackage, measureComponent };