const { test, expect } = require('@playwright/test');

// You can expand this array to include all 34+ required scenarios
const scenarios = [
//   { 
//     id: 'Pos_Fun_0001', 
//     name: 'Simple sentence', 
//     input: 'mama pansal yanavaa.', 
//     expected: 'මම පන්සල් යනවා.' 
//   },  
//   { 
//     id: 'Pos_Fun_0002', 
//     name: 'compound sentence', 
//     input: 'mama kaeema kaeevaa,haebaeyi mata badagini.', 
//     expected: 'මම කෑම කෑවා,හැබැයි මට බඩගිනි.' 
//   },
//     { 
//     id: 'Pos_Fun_0003', 
//     name: 'complex sentence', 
//     input: 'oyaa tharahanam mama kathaa karanne naehae.', 
//     expected: 'ඔයා තරහනම් මම කතා කරන්නේ නැහැ.' 
//   },
//     { 
//     id: 'Pos_Fun_0004', 
//     name: 'Interrogative forms', 
//     input: 'oyaa maath ekka tharahadha?', 
//     expected: 'ඔයා මාත් එක්ක තරහද?' 
//   },
// { 
//     id: 'Pos_Fun_005',  
//     name: 'imperative forms', 
//     input: 'vahaama mata eeka dhenna.', 
//     expected: 'වහාම මට ඒක දෙන්න.' 
//   },
//      { 
//     id: 'Pos_Fun_0006', 
//     name: 'positive forms', 
//     input: 'mama adha film eka balanavaa.', 
//     expected: 'මම අද film එක බලනවා.' 
//   },
//     { 
//     id: 'Pos_Fun_0007', 
//     name: 'negative forms', 
//     input: 'api adha kathaava balanne naehae', 
//     expected: 'අපි අද කතාව බලන්නෙ නැහැ' 
//   },
//       { 
//     id: 'Pos_Fun_0008', 
//     name: 'Greetings', 
//     input: 'suba naththalak veevaa!', 
//     expected: 'සුබ නත්තලක් වේවා!' 
//   },
//     { 
//     id: 'Pos_Fun_0009', 
//     name: 'Requests', 
//     input: 'karuNaakaralaa magee potha dhenna.', 
//     expected: 'කරුණාකරලා මගේ පොත දෙන්න.' 
//   },
//    { 
//     id: 'Pos_Fun_0010', 
//     name: 'Responses', 
//     input: 'hari,mama uththarayak dhennam.', 
//     expected: 'හරි,මම උත්තරයක් දෙන්නම්.' 
//   },
//   { 
//     id: 'Pos_Fun_0011', 
//     name: 'Polite phrasing', 
//     input: 'samaavenna,mama eeka dhaekke naehae.', 
//     expected: 'සමාවෙන්න,මම ඒක දැක්කෙ නැහැ.' 
//   },
//   { 
//     id: 'Pos_Fun_0012', 
//     name: 'Informal phrasing', 
//     input: 'hariyata sellam karapan.', 
//     expected: 'හරියට සෙල්ලම් කරපන්.' 
//   },
// { 
//     id: 'Pos_Fun_0013', 
//     name: 'frequently used day-to-day expressions', 
//     input: 'mata badaginiyi.', 
//     expected: 'මට බඩගිනියි.' 
//   },
// { 
//     id: 'Pos_Fun_0014', 
//     name: 'multi-word expressions and frequent collocations', 
//     input: 'ikmanata enna.', 
//     expected: 'ඉක්මනට එන්න.' 
//   },
// { 
//     id: 'Pos_Fun_0015',  
//     name: 'proper spacing', 
//     input: 'mama adha havasa pansaal yanavaa.', 
//     expected: 'මම අද හවස පන්සල් යනවා.' 
//   },
// { 
//     id: 'Pos_Fun_0016',  
//     name: 'missing spaces', 
//     input: 'apiadhapaadamkaranavaa.', 
//     expected: 'අපිඅදපාඩම්කරනවා.' 
//   },
// { 
//     id: 'Pos_Fun_0017',  
//     name: 'repeated word expression used for emphasis', 
//     input: 'aethi aethi ithuru vaeda tika heta karamu.', 
//     expected: 'ඇති ඇති ඉතුරු වැඩ ටික හෙට කරමු.' 
//   },
// { 
//     id: 'Pos_Fun_0018',  
//     name: 'Tense variations(past)', 
//     input: 'api pereedhaa baNa gedhara giyaa.', 
//     expected: 'අපි පෙරේදා බණ ගෙදර ගියා.' 
//   },
// { 
//     id: 'Pos_Fun_0019',  
//     name: 'Tense variations(present)', 
//     input: 'mama mal paeLayak hitavanavaa.', 
//     expected: 'මම මල් පැළයක් හිටවනවා.' 
//   },
// { 
//     id: 'Pos_Fun_0020',  
//     name: 'Tense variations(future)', 
//     input: 'api anidhdhaa boodima as karanavaa.', 
//     expected: 'අපි අනිද්දා බෝඩිම අස් කරනවා.' 
//   },
// { 
//     id: 'Pos_Fun_0021',  
//     name: 'Negation patterns', 
//     input: 'mata ee dheeval valin vaedak naehae.', 
//     expected: 'මට ඒ දේවල් වලින් වැඩක් නැහැ.' 
//   },
{ 
    id: 'Pos_Fun_0021',  
    name: 'Singular/Plural usage and pronoun variations', 
    input: 'mata ee dheeval valin vaedak naehae.', 
    expected: 'මට ඒ දේවල් වලින් වැඩක් නැහැ.' 
  },
];

for (const scenario of scenarios) {
  test(`${scenario.id}: ${scenario.name}`, async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    // Input: Singlish text box [cite: 303]
    const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
    await inputArea.pressSequentially(scenario.input, { delay: 30 });

    // Output: The specific results div we found in your DevTools
    const outputDiv = page.locator('div.whitespace-pre-wrap.overflow-y-auto').first();

    // Verification: Real-time update check [cite: 372, 392]
    await expect(outputDiv).not.toBeEmpty({ timeout: 10000 });
    
    const actualOutput = await outputDiv.innerText();
    console.log(`TC ID: ${scenario.id} | Actual: ${actualOutput}`);

    // Requirements check: Save a screenshot for your report evidence
    await page.screenshot({ path: `screenshots/${scenario.id}.png` });

    // Status Check
    // Note: For Neg_Fun tests, you might expect the output to be messy
    if (scenario.id.startsWith('Pos')) {
        expect(actualOutput.trim()).toBe(scenario.expected);
    }
  });
}