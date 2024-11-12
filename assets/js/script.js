// Function to get all IDs and classes from the document
function getIdsAndClasses() {
    const ids = new Set();
    const classes = new Set();

    // Traverse all elements in the document
    document.querySelectorAll('*').forEach(element => {
        // Collect ID if it exists
        if (element.id) {
            ids.add(element.id);
        }
        // Collect classes if they exist
        element.classList.forEach(cls => classes.add(cls));
    });

    return {
        ids: Array.from(ids), // Convert Set to Array
        classes: Array.from(classes) // Convert Set to Array
    };
}

// Usage
const result = getIdsAndClasses();
console.log('IDs:', result.ids);
console.log('Classes:', result.classes);