import { 
    createBunny, 
    getFamilies, 
    checkAuth, 
    logout 
} from '../fetch-utils.js';

const form = document.querySelector('.bunny-form');
const logoutButton = document.getElementById('logout');

form.addEventListener('submit', async(e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const familyId = formData.get('family-id');
    const name = formData.get('bunny-name');

    await createBunny({
        name: name,
        family_id: familyId
    });

    form.reset();
});

window.addEventListener('load', async() => {
    const select = document.querySelector('select');
    const families = await getFamilies();
    const optionEl = document.createElement('option');
    for (let family of families) {
        optionEl.value = family.id;
        optionEl.textContent = family.name;
        
        select.append(optionEl);
    }
});


checkAuth();

logoutButton.addEventListener('click', () => {
    logout();
});
