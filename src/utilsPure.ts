/* eslint-disable prettier/prettier */
// Pure javascript utilities, that don't use VS Code API.
// They can still use VS Code type definitions.

export const words_in_text = function (text: string) {
    const regex = /[\p{L}]+|[0-9]+/gu;
    const t = text.match(regex);
    if(t == null) { return t; }
    const chineseFilter = /^[\u4e00-\u9fa5]/g;    
    return t.toString().match(chineseFilter);
};
