// import skApi from './main';
// import jest from 'jest';

// describe('skApi', () => {
//   let api;

//   beforeEach(() => {
//     api = new skApi('https://api.example.com', { Authorization: 'Bearer token' });
//   });

//   test('insertCounsel should make a POST request to the correct endpoint', async () => {
//     const data = { name: 'John Doe' };
//     const expectedEndpoint = '/api/counsel/insert.do';

//     const mockPost = jest.spyOn(api, 'post').mockResolvedValueOnce({ success: true });
//     await api.insertCounsel(data);

//     expect(mockPost).toHaveBeenCalledWith(expectedEndpoint, data);
//   });

//   test('officialReg should make a GET request to the correct endpoint', async () => {
//     const expectedEndpoint = '/api/officialReg.do';

//     const mockGet = jest.spyOn(api, 'get').mockResolvedValueOnce({ success: true });
//     await api.officialReg();

//     expect(mockGet).toHaveBeenCalledWith(expectedEndpoint, {});
//   });


// });