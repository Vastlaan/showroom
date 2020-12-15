// Default styles apply to devices between 320 and 600 px

export function respond(type, content) {
    if (type === "xs") {
        return `@media only screen and (max-width: 319px){
    ${content}
  }`;
    } else if (type === "s") {
        return `@media only screen and (min-width: 600px){
    ${content}
  }`;
    } else if (type === "m") {
        return `@media only screen and (min-width: 768px){
    ${content}
  }`;
    } else if (type === "l") {
        return `@media only screen and (min-width: 992px){
    ${content}
  }`;
    } else if (type === "xl") {
        return `@media only screen and (min-width: 1255px){
    ${content}
  }`;
    } else if (type === "xxl") {
        return `@media only screen and (min-width: 1439px){
    ${content}
  }`;
    } else if (type === "tv") {
        return `@media only screen and (min-width: 2561px){
    ${content}
  }`;
    }
}
