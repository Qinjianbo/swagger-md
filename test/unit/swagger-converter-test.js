import fixtures from '../../test-util/fixtures';
import converter from '../../src/swagger-converter';

describe('test/unit/swagger-converter-test.js', () => {

  describe('convertToMarkdown', () => {

    describe('with a valid, parsed Swagger spec', () => {
      let swagger_api_spec;
      let swagger_api_md_str;

      beforeEach(() => {
        swagger_api_spec = fixtures.loadSwaggerSpec();
        swagger_api_md_str = fixtures.loadSwaggerSpecMarkdown();
      });

      it('should return contents of a valid .md file', () => {
        return converter.convertToMarkdown(swagger_api_spec).should.be.fulfilledWith(swagger_api_md_str);
      });

    });

  });

});
