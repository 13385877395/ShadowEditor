/**
 * The OES_element_index_uint extension is part of the WebGL API and 
 * adds support for gl.UNSIGNED_INT types to WebGLRenderingContext.drawElements().
 * @param {*} gl WebGL
 * @returns {*} Extension
 * @see https://developer.mozilla.org/en-US/docs/Web/API/OES_element_index_uint
 */
function OES_element_index_uint(gl) {
    return gl.getExtension('OES_element_index_uint');
}

export default OES_element_index_uint;