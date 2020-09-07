import { useEffect } from 'react';
var importScript = function importScript(resourceUrl) {
  useEffect(function () {
    var script = document.createElement('script');
    script.src = resourceUrl;
    script.async = true;
    document.body.appendChild(script);
    return function () {
      document.body.removeChild(script);
    };
  }, [resourceUrl]);
};
export default importScript;