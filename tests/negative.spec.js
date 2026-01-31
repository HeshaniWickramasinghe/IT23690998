const { test, expect } = require('@playwright/test');

// You can expand this array to include all 34+ required scenarios
const scenarios = [
  { 
    id: 'Neg_Fun_0001', 
    name: 'Incorrect transliteration of brand names', 
    input: 'mama samsung phone ekak ganna yanvaa.', 
    expected: 'මම samsung phone එකක් ගන්න යනවා.'
  },
 { 
    id: 'Neg_Fun_0002', 
    name: 'Incorrect transliteration of specific words', 
    input: 'document.jpg kiyalaa save karanna.', 
    expected: 'document.jpg කියලා save කරන්න.'
  },
  { 
    id: 'Neg_Fun_0003', 
    name: 'Incorrect capitalization handling', 
    input: 'mama aBA kaeevaa.', 
    expected: 'මම අඹ කෑවා.'
  },
  { 
    id: 'Neg_Fun_0004', 
    name: 'not identifying some characters', 
    input: 'mama paadam karanawaa.', 
    expected: 'මම පාඩම් කරනවා.'
  },
   { 
    id: 'Neg_Fun_0005', 
    name: 'Code tag input', 
    input: 'udinma mehema "<html>api</html>" dhaanna', 
    expected: 'උඩින්ම මෙහෙම "<html>api</html>" දාන්න'
  },
{ 
  id: 'Neg_Fun_0006', 
  name: 'Spelling stress with uppercase letters', 
  input: 'maNYANYAokkaa thambalaa thiyenavaa kanna.', 
  expected: 'මඤ්ඤොක්කා තම්බලා තියෙනවා කන්න.'
},
    { 
    id: 'Neg_Fun_0007', 
    name: 'No word boundary', 
    input: 'mamahavasakadeetayanavaa.', 
    expected: 'මම හවස කඩේට යනවා.'
  },
     { 
    id: 'Neg_Fun_0008', 
    name: 'Foriegn script mix', 
    input: 'mamayi ammayi adha havasa Naghoya yanavaa.', 
    expected: 'මමයි අම්මයි අද හවස Naghoya යනවා.'
  },
{
  id: 'Neg_Fun_0009',
  name: 'Email address embedded in Singlish text',
  input: 'magee email eka wickramasinghheshani@gmail.com kiyalaa save karanna.',
  expected: 'මගේ email එක wickramasinghheshani@gmail.com කියලා save කරන්න.'
},

{
  id: 'Neg_Fun_0010',
  name: 'URL embedded in Singlish text',
  input: 'oya https://google.com balanna',
  expected: 'ඔයා https://google.com බලන්න'
},

      { 
    id: 'Neg_Fun_00011', 
    name: 'Excessive spacing stress', 
    input: 'api adha havasa badminton practice   yanavaa.', 
    expected: 'අපි අද හවස badminton practice යනවා.'
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
    if (scenario.id.startsWith('Neg')) {
        expect(actualOutput.trim()).toBe(scenario.expected);
    }
  });
}