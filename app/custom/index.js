import CustomContextPad from './CustomContextPad';
import CustomPalette from './CustomPalette';
import CustomRenderer from './CustomRenderer';
import CustomContextPadProvider from './CustomContextPadProvider';

export default {
  __init__: [ 'customContextPad', 'customPalette', 'customRenderer', 'customContextPadProvider'],
  customContextPad: [ 'type', CustomContextPad ],
  customPalette: [ 'type', CustomPalette ],
  customRenderer: [ 'type', CustomRenderer ],
  customContextPadProvider: [ 'type', CustomContextPadProvider ],
};