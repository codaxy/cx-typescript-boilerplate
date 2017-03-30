let categoryExample = {};

export function register(name, category, content) {
    let cat = categoryExample[category] || (categoryExample[category] = []);
    let example = {
        name,
        content,
        path: `~/${category.toLowerCase()}/${name.toLowerCase().replace(/\s/g, '-')}`
    }

    //Hot Module Reload - replace example
    let index = cat.findIndex(a=>a.name == name);
    if (index != -1)
        cat[index] = example;
    else
        cat.push(example);
}

export function getCategories() {
    return ['Forms', 'Grid'].map(c => ({
        name: c,
        examples: categoryExample[c] || []
    }));
}
