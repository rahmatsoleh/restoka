import UrlParser from '../src/scripts/routes/url-parser';

describe('Cek Url Parser', () => {
  it('Should be able to split url string with only resource property', () => {
    window.location.href = '#/';
    const urlSplitter = UrlParser.parseActiveWithoutCombiner();
    expect(urlSplitter).toEqual({
      resource: null,
      id: null,
      verb: null,
    });
  });

  it('Should be able to combine url from given splitter have resources', () => {
    window.location.href = '#/favorite';
    const urlSplitter = UrlParser.parseActiveWithoutCombiner();
    expect(urlSplitter).toEqual({
      resource: 'favorite',
      id: null,
      verb: null,
    });
  });

  it('should have resources and keywords', () => {
    window.location.href = '#/detail/abcdefg';
    const urlSplitter = UrlParser.parseActiveWithoutCombiner();
    expect(urlSplitter).toEqual({
      resource: 'detail',
      id: 'abcdefg',
      verb: null,
    });
  });

  it('should have resources, keywords, and verb when get url', () => {
    window.location.href = '#/detail/abcdefg/post';
    const urlSplitter = UrlParser.parseActiveWithoutCombiner();
    expect(urlSplitter).toEqual({
      resource: 'detail',
      id: 'abcdefg',
      verb: 'post',
    });
  });
});
