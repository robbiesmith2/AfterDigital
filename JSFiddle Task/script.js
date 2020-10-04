/*
Javascript Test Instructions 
Using Plain JS and no libraries, Please complete the following and console.log the answers:

1. Query select the .test__block and return an array of HTMLElements.

2. Take the provided testData JSON & sort by the following:
    > Remove items with no availability.
    > Sort the items by date_from in  date ascending.
    > Order the items in the array with the items with {featured: true} at the start of the array.

3. Take the data provided within testData2 and remove the dublicate entries.

4. Take the provided testData JSON and return the items in the following format:
{
    id: ".....",
    details: {
        title: "...",
        descriptions: "....",
        picture: ".....",
    },
    status: {
        date_from: "....."
        availability: ....	
    }
}
*/

const testData = [
{
    "id": "5cbf2d021616dc7722658426",
    "title": "PLASMOX",
    "picture": "http://placehold.it/32x32",
    "description": "Lorem qui adipisicing proident laboris tempor amet tempor aliqua tempor non consectetur fugiat. Voluptate minim adipisicing non ea proident. Eiusmod est Lorem elit veniam. Et do irure veniam culpa commodo nostrud sit aliqua tempor occaecat.\r\n",
    "date_from": "2020-01-01",
    "featured": true,
    "availability": 4 
},
{
    "id": "5cbf2d02e2afd5d871c73778",
    "title": "DAISU",
    "picture": "http://placehold.it/32x32",
    "description": "Irure elit veniam laboris proident excepteur proident exercitation sit labore est incididunt. Nulla voluptate minim est magna commodo incididunt officia enim laboris qui eiusmod eu labore. Proident irure ipsum exercitation excepteur aliqua tempor mollit sunt non do excepteur non. Dolor aliqua veniam veniam fugiat cillum.\r\n",
    "date_from": "2020-04-18",
    "featured": false,
    "availability": 0
},
{
    "id": "5cbf2d02938184461444666d",
    "title": "TELPOD",
    "picture": "http://placehold.it/32x32",
    "description": "Aliqua ullamco Lorem quis eu sint irure reprehenderit ea voluptate minim incididunt nulla fugiat ex. Elit et occaecat Lorem duis id excepteur. Voluptate anim ipsum sunt deserunt deserunt aliqua laborum proident culpa. Dolor enim sint ut aute nostrud dolor minim pariatur in id nulla.\r\n",
    "date_from": "2019-04-19",
    "featured": false,
    "availability": 200
},
{
    "id": "5cbf2d02d80112359ce24e30",
    "title": "CORMORAN",
    "picture": "http://placehold.it/32x32",
    "description": "Mollit et in eiusmod proident adipisicing non do qui sint sunt officia. Nostrud Lorem non voluptate est commodo eu aliquip consequat cupidatat. Occaecat ea deserunt sit ad do cillum elit eu ullamco. Consequat pariatur magna aute laborum sunt do qui mollit adipisicing enim cupidatat do. Eiusmod exercitation incididunt nulla voluptate tempor officia pariatur proident proident sint ipsum. Sunt amet ex laboris aute veniam exercitation nostrud proident mollit consectetur ipsum.\r\n",
    "date_from": "2019-06-20",
    "featured": false,
    "availability": "1"
},
{
    "id": "5cbf2d021e72a06d5be02d6e",
    "title": "NETBOOK",
    "picture": "http://placehold.it/32x32",
    "description": "Est ea aliquip minim ea proident. Sint amet ut reprehenderit ea esse amet et sit duis commodo ullamco sint aliquip. Aliqua commodo commodo cupidatat anim ut proident do occaecat id. Amet qui labore incididunt et consequat laboris ipsum incididunt ut ad mollit. Esse qui irure ipsum ipsum commodo pariatur fugiat do officia Lorem occaecat. Pariatur aliqua reprehenderit ut ex sint veniam ipsum labore et sit excepteur. Pariatur aute nulla nisi ea magna consequat quis ipsum ad.\r\n",
    "date_from": "2019-05-19",
    "featured": true,
    "availability": "-1"
},
];

const testData2 = ["Apple", "Mango", "Banana", "Orange", "Apple", "Banana", "Mango","Orange"];

// 1
const testBlocks = Array.from(document.querySelectorAll('.test__block'));

// 2
const filteredTestData = testData.filter(item => item.availability && item.availability !== '-1');
const sortedTestData = filteredTestData.sort((a, b) => a.date_from > b.date_from);
const featuredTestData = sortedTestData.sort((a, b) => b.featured - a.featured);

// 3
const tidiedTestData2 = [...new Set(testData2)];

// 4
const newTestData = testData.map((item) => {
    item = {
        id: item.id,
        details: {
        title: item.title,
        description: item.description,
        picture: item.picture
        },
        status: {
            date_from: item.date_from,
            availability: item.availability
        }
    };
    return item;
})