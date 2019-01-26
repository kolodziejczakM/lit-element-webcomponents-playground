import { Selector } from 'testcafe';

fixture`Dropdown component`
    .page`http://localhost:4000`;

test('Dropdown can be reached', async t => {
    const element: Selector = Selector('featured-dropdown');

    await t.expect(element.exists).ok();
});
