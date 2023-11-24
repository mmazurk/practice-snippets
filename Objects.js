const library = {
    name: "Central Library",
    address: {
        street: "123 Library Lane",
        city: "Booksville",
        state: "Readland",
        zip: "12345"
    },
    sections: {
        fiction: {
            numberOfBooks: 3000,
            bestSellers: ["The Great Tale", "Bookville Adventure", "Readland Chronicles"],
            headLibrarian: {
                name: "Alice",
                age: 35,
                yearsOfService: 10
            }
        },
        nonFiction: {
            numberOfBooks: 1500,
            bestSellers: ["Fact Book", "How to Library", "History of Booksville"],
            headLibrarian: {
                name: "Bob",
                age: 42,
                yearsOfService: 12
            }
        },
        children: {
            numberOfBooks: 1000,
            bestSellers: ["Little Book", "Adventures of Bookie", "Library Kids"],
            headLibrarian: {
                name: "Charlie",
                age: 29,
                yearsOfService: 5
            }
        }
    },
    totalEmployees: 50,
    isOpen: true
};

// 1. List all the top-level keys of the `library` object; before you do, what does this return? 
// 2. Display the street address of the library.
// 3. List all the section names in the library (e.g., fiction, nonFiction, children).
// 4. Show the name of the head librarian for the fiction section.
// 5. Display the number of bestSellers in the nonFiction section.
// 6. Check if the library is open and print a message ("The library is open!" or "The library is closed!").
// 7. List all the bestSellers in the children section.
// 8. Display the total number of books in the library (Hint: Sum the number of books across all sections).

// show what keys this object has
// show what values this object has
// create an array of arrays that contains key-value pairs

// Object.keys() => array
// Object.values() => array
// Object.is() => boolean
// Object.entries() => array