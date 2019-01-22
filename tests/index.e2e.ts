import { Selector } from 'testcafe';

fixture`Dropdown component`
    .page`http://localhost:4000`;

test('Dropdown can be reached', async t => {
    const element: Selector = Selector('featured-dropdown')

    if (await element.exists && await element.visible) {
        await t.click('featured-dropdown');
    }
});
