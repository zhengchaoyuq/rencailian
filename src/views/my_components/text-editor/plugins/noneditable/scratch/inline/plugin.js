(function () {

var defs = {}; // id -> {dependencies, definition, instance (possibly undefined)}

// Used when there is no 'main' module.
// The name is probably (hopefully) unique so minification removes for releases.
var register_3795 = function (id) {
  var module = dem(id);
  var fragments = id.split('.');
  var target = Function('return this;')();
  for (var i = 0; i < fragments.length - 1; ++i) {
    if (target[fragments[i]] === undefined)
      target[fragments[i]] = {};
    target = target[fragments[i]];
  }
  target[fragments[fragments.length - 1]] = module;
};

var instantiate = function (id) {
  var actual = defs[id];
  var dependencies = actual.deps;
  var definition = actual.defn;
  var len = dependencies.length;
  var instances = new Array(len);
  for (var i = 0; i < len; ++i)
    instances[i] = dem(dependencies[i]);
  var defResult = definition.apply(null, instances);
  if (defResult === undefined)
     throw 'module [' + id + '] returned undefined';
  actual.instance = defResult;
};

var def = function (id, dependencies, definition) {
  if (typeof id !== 'string')
    throw 'module id must be a string';
  else if (dependencies === undefined)
    throw 'no dependencies for ' + id;
  else if (definition === undefined)
    throw 'no definition function for ' + id;
  defs[id] = {
    deps: dependencies,
    defn: definition,
    instance: undefined
  };
};

var dem = function (id) {
  var actual = defs[id];
  if (actual === undefined)
    throw 'module [' + id + '] was undefined';
  else if (actual.instance === undefined)
    instantiate(id);
  return actual.instance;
};

var req = function (ids, callback) {
  var len = ids.length;
  var instances = new Array(len);
  for (var i = 0; i < len; ++i)
    instances.push(dem(ids[i]));
  callback.apply(null, callback);
};

var ephox = {};

ephox.bolt = {
  module: {
    api: {
      define: def,
      require: req,
      demand: dem
    }
  }
};

var define = def;
var require = req;
var demand = dem;
// this helps with minificiation when using a lot of global references
var defineGlobal = function (id, ref) {
  define(id, [], function () { return ref; });
};
/*jsc
["0","1","2","3","4","5"]
jsc*/
defineGlobal("3", tinymce.util.Tools.resolve);
/**
 * ResolveGlobal.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2017 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

define(
  "1",
  [
    "3"
  ],
  function (resolve) {
    return resolve('tinymce.PluginManager');
  }
);

/**
 * ResolveGlobal.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2017 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

define(
  "4",
  [
    "3"
  ],
  function (resolve) {
    return resolve('tinymce.util.Tools');
  }
);

/**
 * Settings.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2017 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

define(
  "5",
  [
  ],
  function () {
    var getNonEditableClass = function (editor) {
      return editor.getParam('noneditable_noneditable_class', 'mceNonEditable');
    };

    var getEditableClass = function (editor) {
      return editor.getParam('noneditable_editable_class', 'mceEditable');
    };

    var getNonEditableRegExps = function (editor) {
      var nonEditableRegExps = editor.getParam('noneditable_regexp', []);

      if (nonEditableRegExps && nonEditableRegExps.constructor === RegExp) {
        return [nonEditableRegExps];
      } else {
        return nonEditableRegExps;
      }
    };

    return {
      getNonEditableClass: getNonEditableClass,
      getEditableClass: getEditableClass,
      getNonEditableRegExps: getNonEditableRegExps
    };
  }
);
/**
 * FilterContent.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2017 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

define(
  "2",
  [
    "4",
    "5"
  ],
  function (Tools, Settings) {
    var hasClass = function (checkClassName) {
      return function (node) {
        return (' ' + node.attr('class') + ' ').indexOf(checkClassName) !== -1;
      };
    };

    var replaceMatchWithSpan = function (editor, content, cls) {
      return function (match) {
        var args = arguments, index = args[args.length - 2];
        var prevChar = index > 0 ? content.charAt(index - 1) : '';

        // Is value inside an attribute then don't replace
        if (prevChar === '"') {
          return match;
        }

        // Is value inside a contentEditable='false' tag
        if (prevChar === '>') {
          var findStartTagIndex = content.lastIndexOf('<', index);
          if (findStartTagIndex !== -1) {
            var tagHtml = content.substring(findStartTagIndex, index);
            if (tagHtml.indexOf('contenteditable="false"') !== -1) {
              return match;
            }
          }
        }

        return (
          '<span class="' + cls + '" data-mce-content="' + editor.dom.encode(args[0]) + '">' +
          editor.dom.encode(typeof args[1] === 'string' ? args[1] : args[0]) + '</span>'
        );
      };
    };

    var convertRegExpsToNonEditable = function (editor, nonEditableRegExps, e) {
      var i = nonEditableRegExps.length, content = e.content;

      // Don't replace the variables when raw is used for example on undo/redo
      if (e.format === 'raw') {
        return;
      }

      while (i--) {
        content = content.replace(nonEditableRegExps[i], replaceMatchWithSpan(editor, content, Settings.getNonEditableClass(editor)));
      }

      e.content = content;
    };

    var setup = function (editor) {
      var editClass, nonEditClass, contentEditableAttrName = 'contenteditable';

      editClass = ' ' + Tools.trim(Settings.getEditableClass(editor)) + ' ';
      nonEditClass = ' ' + Tools.trim(Settings.getNonEditableClass(editor)) + ' ';

      var hasEditClass = hasClass(editClass);
      var hasNonEditClass = hasClass(nonEditClass);
      var nonEditableRegExps = Settings.getNonEditableRegExps(editor);

      editor.on('PreInit', function () {
        if (nonEditableRegExps.length > 0) {
          editor.on('BeforeSetContent', function (e) {
            convertRegExpsToNonEditable(editor, nonEditableRegExps, e);
          });
        }

        editor.parser.addAttributeFilter('class', function (nodes) {
          var i = nodes.length, node;

          while (i--) {
            node = nodes[i];

            if (hasEditClass(node)) {
              node.attr(contentEditableAttrName, 'true');
            } else if (hasNonEditClass(node)) {
              node.attr(contentEditableAttrName, 'false');
            }
          }
        });

        editor.serializer.addAttributeFilter(contentEditableAttrName, function (nodes) {
          var i = nodes.length, node;

          while (i--) {
            node = nodes[i];
            if (!hasEditClass(node) && !hasNonEditClass(node)) {
              continue;
            }

            if (nonEditableRegExps.length > 0 && node.attr('data-mce-content')) {
              node.name = '#text';
              node.type = 3;
              node.raw = true;
              node.value = node.attr('data-mce-content');
            } else {
              node.attr(contentEditableAttrName, null);
            }
          }
        });
      });
    };

    return {
      setup: setup
    };
  }
);
/**
 * Plugin.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2017 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

define(
  "0",
  [
    "1",
    "2"
  ],
  function (PluginManager, FilterContent) {
    PluginManager.add('noneditable', function (editor) {
      FilterContent.setup(editor);
    });

    return function () { };
  }
);
dem("0")();
})();