let categoryExample = {};

export function register(name, category, content) {
    let cat = categoryExample[category] || (categoryExample[category] = []);
    cat.push({
        name,
        content,
        path: `~/${category.toLowerCase()}/${name.toLowerCase().replace(/\s/, '-')}`
    });
}

export function getCategories() {
    return ['Forms', 'Grid'].map(c => ({
        name: c,
        examples: categoryExample[c] || []
    }));
}
