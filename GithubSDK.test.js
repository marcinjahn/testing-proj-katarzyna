import nodeFetch from "node-fetch"; // pobieram paczkę
global.fetch = nodeFetch; // przypisuję do fetch pobraną paczkę, w Node.js global === window

test('1 + 1 = 2', () => { expect(1 + 1).toBe(2);
});
