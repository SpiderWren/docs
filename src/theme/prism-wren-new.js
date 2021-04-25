var multilineComment = /\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source;
for (var i = 0; i < 2; i++) {
    // Supports up to 4 levels of nested comments
    multilineComment = multilineComment.replace(/<self>/g, function () { return multilineComment; });
}
multilineComment = multilineComment.replace(/<self>/g, function () { return /[^\s\S]/.source; });

Prism.languages.wren = {

    'comment': [
        {
            pattern: RegExp(/(^|[^\\])/.source + multilineComment),
            lookbehind: true,
            greedy: true
        },
        {
            pattern: /(^|[^\\:])\/\/.*/,
            lookbehind: true,
            greedy: true
        }
    ],
    'triple-quoted-string': {
        pattern: /(?:[])?(""")[\s\S]*?\1/iu,
        greedy: true,
        alias: 'string'
    },
    'string': {
        pattern: /(["])(?:(?!\1)[^\\]|\\[\s\S])*\1/iu,
        greedy: true,
        inside: {
            'interpolation': {
                pattern: /%\((?:[^()]|\([^)]+\))+\)/iu,
                inside: {
                    delimiter: {
                        pattern: /^%\(|\)$/iu,
                        alias: 'variable'
                    }
                    // Only single quote strings can have interpolation
                    // 'rest' defined at the end of this function
                }
            }
        }
    },
    'boolean': /\b(?:true|false)\b/,
    'number': /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    'null': {
        pattern: /\bnull\b/,
        alias: 'keyword'
    },
    'attribute': [
        {
            pattern: /^#.*/,
            greedy: false,
            alias: 'keyword'
        },
        {
            pattern: /^#!.*/,
            greedy: false,
            alias: 'variable'
        },
    ],
    'class-name': [
        {
            pattern: /(\b(?:class)\s+)[\w.\\]+/i,
            lookbehind: true,
            inside: {
                'punctuation': /[.\\]/
            }
        }
    ],
    'keyword': /\b(?:if|else|while|for|return|in|is|as|null|break|continue|foreign|construct|static|var|class|this|super|#!|#|import)\b/,
    'function': /(?!\d)\w+(?=\s*(?:[({]))/,
    'operator': [
        /[-+*%^&|#]|\/\/?|<[<=]?|>[>=]?|[=~]=?/,
        {
            // Match ".." but don't break "..."
            pattern: /(^|[^.])\.\.(?!\.)/,
            lookbehind: true
        }
    ],
    'punctuation': /[\[\](){},;]|\.+|:+/,
    // Highlight predefined classes and wren_cli classes as builtin
    'builtin': /\b(?:Num|System|Object|Sequence|List|Map|Bool|String|Range|Fn|Fiber|Meta|Random|File|Directory|Stat|Stdin|Stdout|Platform|Process|Scheduler|Timer)\b/,
    'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
    'variable': /[a-zA-Z_]\w*(?:[?!]|\b)/,
};

Prism.languages.wren['string'].inside['interpolation'].inside.rest = Prism.languages.wren;
