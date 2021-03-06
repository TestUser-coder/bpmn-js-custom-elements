import inherits from 'inherits';

import ContextPadProvider from 'bpmn-js/lib/features/context-pad/ContextPadProvider';
import CustomContextPad from './CustomContextPad';

import {
  isAny,
  is
} from 'bpmn-js/lib/features/modeling/util/ModelingUtil';

import {
  assign,
  bind
} from 'min-dash';

export default function CustomContextPadProvider(injector, connect, translate) {
  injector.invoke(ContextPadProvider, this);
  var cached = bind(this.getContextPadEntries, this);

  const _getContextPadEntries =
    ContextPadProvider.prototype.getContextPadEntries;
    ContextPadProvider.prototype.getContextPadEntries = function(element) {
      var businessObject = element.businessObject;
	  
	  const entries = _getContextPadEntries.apply(this, [element]);
	  
	  if ((element.type === "bpmn:Task") && (businessObject.suitable > 0)){
      delete entries["append.end-event"];
      delete entries["append.low-task"];
    }
      return entries;
    
  }

}

inherits(CustomContextPadProvider, ContextPadProvider);

CustomContextPadProvider.$inject = [
  'injector',
  'connect',
  'translate'
];