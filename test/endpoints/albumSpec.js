import Imgur from '../../build/imgur';
import request from 'superagent-bluebird-promise';
const imgur = Imgur('testKey');

describe('Album Endpoint', () => {
    describe('GET', () => {
        const hash = 'MkbTY';
        let promise;

        describe('synchronous GET function', () => {
            beforeEach(() => {
                stub(imgur.album, 'get');
                promise = imgur.album.get(hash);
            });
            afterEach(() => {
                imgur.album.get.restore();
            });

            it('should have been run once', () => {
                expect(imgur.album.get).to.have.been.calledOnce;
            });

            it('should have been run with a hash', () => {
                expect(imgur.album.get).to.have.been.calledWith(hash);
            });

        });

        describe('synchronous GET function call to imgurAPICall', () => {
            beforeEach(() => {
                stub(imgur.album, 'imgurAPICall');
                promise = imgur.album.get(hash);
            });
            afterEach(() => {
                imgur.album.imgurAPICall.restore();
            });


            it('should call imgurAPICall', () => {
                expect(imgur.album.imgurAPICall).to.have.been.calledOnce;
            });

            it('should call imgurAPICall', () => {
                expect(imgur.album.imgurAPICall).to.have.been.calledWith({
                    apiUrl: "https://api.imgur.com/3",
                    path: 'album/' + hash,
                    method: "get",
                    body: {}
                });
            });
        });
    });
});
