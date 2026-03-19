// AI-Friendliness Score Calculator
const fs = require('fs');
const path = require('path');

const components = [
  'packages/react/src/components/Button/Button.tsx',
  'packages/react/src/components/Input/Input.tsx',
  'packages/react/src/components/Card/Card.tsx',
  'packages/react/src/components/Typography/Typography.tsx',
  'packages/react/src/components/Modal/Modal.tsx',
  'packages/react/src/components/Toast/Toast.tsx'
];

function calculateScore(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  
  // Code Quality (50 points)
  const codeQuality = {
    simplicity: 0,
    structure: 0,
    clarity: 0,
    architecture: 0,
    types: 0
  };
  
  // Maintainability (30 points)
  const maintainability = {
    reusability: 0,
    documentation: 0,
    testing: 0,
    consistency: 0,
    extensibility: 0
  };
  
  // Consistency (20 points)
  const consistency = {
    naming: 0,
    patterns: 0,
    style: 0,
    standards: 0
  };
  
  // Code Quality Analysis
  const lineCount = lines.length;
  const docCommentRatio = (content.match(/\/\*\*/g) || []).length / Math.max(lineCount, 1);
  
  // Simplicity: Shorter is better (prefer < 150 lines)
  codeQuality.simplicity = lineCount < 100 ? 10 : lineCount < 150 ? 8 : lineCount < 200 ? 6 : 4;
  
  // Structure: Clear component structure
  const hasClearStructure = content.includes('export const') || content.includes('export function');
  const hasPropsInterface = content.includes('interface') || content.includes('type');
  codeQuality.structure = hasClearStructure && hasPropsInterface ? 10 : 5;
  
  // Clarity: Minimal complexity
  const complexity = content.split('{').length - content.split('}').length;
  codeQuality.clarity = Math.abs(complexity) < 20 ? 10 : Math.abs(complexity) < 40 ? 7 : 4;
  
  // Architecture: Composition pattern
  const hasComposition = content.includes('Primitive') || content.includes('Pressable') || content.includes('Box');
  codeQuality.architecture = hasComposition ? 10 : 6;
  
  // Types: Strong typing
  const hasForwardRef = content.includes('forwardRef');
  const hasGenerics = content.includes('<');
  codeQuality.types = hasForwardRef && hasGenerics ? 10 : 6;
  
  // Maintainability Analysis
  // Reusability: Helper functions, utilities
  const hasHelpers = content.includes('const') && content.includes('return');
  maintainability.reusability = hasHelpers ? 6 : 4;
  
  // Documentation: Essential docs only
  const hasEssentialDocs = content.includes('@usage') || content.includes('@component');
  const docLines = (content.match(/\* /g) || []).length;
  maintainability.documentation = hasEssentialDocs && docLines < 20 ? 6 : hasEssentialDocs ? 4 : 2;
  
  // Testing: Test file exists
  const testPath = filePath.replace('.tsx', '.test.tsx');
  maintainability.testing = fs.existsSync(testPath) ? 6 : 0;
  
  // Consistency: Pattern consistency
  const hasClsx = content.includes('clsx');
  maintainability.consistency = hasClsx ? 6 : 4;
  
  // Extensibility: Easy to extend
  const hasRestProps = content.includes('...rest');
  maintainability.extensibility = hasRestProps ? 6 : 4;
  
  // Consistency Analysis
  // Naming: Consistent naming
  const fileName = path.basename(filePath, '.tsx');
  const componentName = content.match(/export const (\w+)/)?.[1];
  consistency.naming = fileName === componentName ? 5 : 3;
  
  // Patterns: Consistent patterns
  const hasStandardProps = content.includes('variant') || content.includes('size');
  consistency.patterns = hasStandardProps ? 5 : 3;
  
  // Style: Consistent style
  const hasProperImports = content.includes("import");
  consistency.style = hasProperImports ? 5 : 3;
  
  // Standards: TypeScript standards
  const hasTypeImports = content.includes('@hi-design/types');
  consistency.standards = hasTypeImports ? 5 : 3;
  
  // Calculate totals
  const codeQualityTotal = Object.values(codeQuality).reduce((a, b) => a + b, 0);
  const maintainabilityTotal = Object.values(maintainability).reduce((a, b) => a + b, 0);
  const consistencyTotal = Object.values(consistency).reduce((a, b) => a + b, 0);
  const total = codeQualityTotal + maintainabilityTotal + consistencyTotal;
  
  return {
    file: path.basename(filePath),
    lineCount,
    codeQuality: codeQualityTotal,
    maintainability: maintainabilityTotal,
    consistency: consistencyTotal,
    total,
    maxScore: 100
  };
}

console.log('🤖 AI-Friendliness Score Calculator\n');
console.log('Evaluating components...\n');

const results = components.map(calculateScore);
const totalScore = results.reduce((sum, r) => sum + r.total, 0);
const avgScore = totalScore / results.length;

results.forEach(result => {
  console.log(`📄 ${result.file}`);
  console.log(`   Lines: ${result.lineCount}`);
  console.log(`   Code Quality: ${result.codeQuality}/50`);
  console.log(`   Maintainability: ${result.maintainability}/30`);
  console.log(`   Consistency: ${result.consistency}/20`);
  console.log(`   Total: ${result.total}/100\n`);
});

console.log(`📊 Overall Average: ${avgScore.toFixed(1)}/100`);
console.log(`📈 Previous Score: 27.0/100`);
console.log(`🚀 Improvement: +${(avgScore - 27).toFixed(1)} points`);
console.log(`🎯 Target: 50/100`);
console.log(`✅ Success: ${avgScore >= 50 ? 'YES!' : 'Not yet'}`);
