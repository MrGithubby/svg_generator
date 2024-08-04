const {Circle, Square, Triangle} = require('./shapes.js')

// A testing suite for the different Shapes is created.
describe('A testing suite for the different Shapes', () => {
    // A test is created to check that Circle does in fact return the two numbers added together.
    describe('Circle', () => {
      it('Create a crcle object midway into the SVG at height 100 and width 150.', () => {
        const circleTest = new Circle('blue', 'avg', 'white');
        const circleTestSVG = circleTest.render();
        expect(circleTestSVG).toContain('cx="150"');
        expect(circleTestSVG).toContain('cy="100"');
        });
    });   
      describe('Circle', () => {
        it('Create a crcle object midway into the SVG at height 100 and width 150.', () => {
          const circleTest = new Circle('blue', 'avg', 'white');
          const circleTestSVG = circleTest.render();
          expect(circleTestSVG).toContain('cx="150"');
          expect(circleTestSVG).toContain('cy="100"');
        });
    });
    describe('Circle', () => {
      it('Create a crcle object midway into the SVG at height 100 and width 150.', () => {
        const circleTest = new Circle('blue', 'avg', 'white');
        const circleTestSVG = circleTest.render();
        expect(circleTestSVG).toContain('cx="150"');
        expect(circleTestSVG).toContain('cy="100"');
    });              
    });
  });