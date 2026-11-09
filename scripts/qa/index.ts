import { validateData } from './validate-data';
import { checkPhones } from './phones';
import { checkBannedPhrases } from './banned-phrases';
import { checkLinks } from './links';
import { checkThin } from './thin';
import { checkSimilarity } from './similarity';
import { checkReadability } from './readability';

async function runQA() {
  console.log('====================================================');
  console.log('🚀 RUNNING COMPREHENSIVE QA TEST SUITE (SPEC SEC 8)');
  console.log('====================================================\n');

  const isStrict = process.argv.includes('--strict');

  try {
    console.log('▶ [1/7] Running Data Validation...');
    validateData();

    console.log('\n▶ [2/7] Running Phone Routing Verification...');
    checkPhones();

    console.log('\n▶ [3/7] Running Banned Phrases & Claims Scan...');
    checkBannedPhrases(isStrict);

    console.log('\n▶ [4/7] Running Internal Links & Sitemap Verification...');
    checkLinks();

    console.log('\n▶ [5/7] Running Thin Content & Word Count Check...');
    checkThin(isStrict);

    console.log('\n▶ [6/7] Running 5-Word Shingle Jaccard Duplicate Analysis...');
    checkSimilarity(0.30, isStrict);

    console.log('\n▶ [7/7] Running Readability & Sentence Length Analysis...');
    checkReadability(9.0, 20.0, isStrict);

    console.log('\n====================================================');
    console.log('🎉 ALL QA GATES PASSED! Reports written to /qa/reports');
    console.log('====================================================');
  } catch (error: any) {
    console.error('\n❌ QA Suite encountered an error:', error.message || error);
    process.exit(1);
  }
}

runQA();
