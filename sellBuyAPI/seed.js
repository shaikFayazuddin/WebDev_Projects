
const { setUpDatabase } = require('./test/utils/testDB');

async function seed() {
    try {
        await setUpDatabase();
        console.log('Database seeded successfully.');
    } catch (error) {
        console.error('Error seeding database:', error);
    }
}

seed();
