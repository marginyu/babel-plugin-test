import uuidv4 from 'uuid/v4';

module.exports = function(fileInfo, api, options) {
  const j = api.jscodeshift;
  const ast = j(fileInfo.source);

  const regexEventName = /on.*(press|Press|click|Click|change|Change|changeText|ChangeText|select|Select|cancel|Cancel|submit|Submit)/;
  const findFirstNode = () => {
    return ast.find(j.Program).get('body', 0).node;
  };
  const findJsxAttribute = () => {
    return ast.find(j.JSXAttribute).filter(p => {
      return (
        p.value.name.type == 'JSXIdentifier' &&
        regexEventName.test(p.value.name.name)
      );
    });
  };
  const findExpressionContainer = findJsxAttribute => {
    return findJsxAttribute().find(j.JSXExpressionContainer);
  };
  const createCommentBlock = () => {
    const uuid = uuidv4();
    return j.commentBlock(`DO NOT REMOVE: ${uuid}`, true, false);
  };
  const createExpContainerWithComment = (path, createComment) => {
    if (!path.node.expression.comments) {
      path.node.expression.comments = [createComment()];
    }
    return j.jsxExpressionContainer(path.node.expression);
  };

  findExpressionContainer(findJsxAttribute).replaceWith(path => {
    return createExpContainerWithComment(path, createCommentBlock);
  });

  return ast.toSource({
    quote: 'single',
    trailingComma: true,
  });
};

