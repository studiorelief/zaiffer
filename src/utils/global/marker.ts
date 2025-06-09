import markerSDK from '@marker.io/browser';

export async function initMarker() {
  if (window.location.href.indexOf('webflow') !== -1) {
    await markerSDK.loadWidget({
      project: '6839c92f670d7caa8dcddcca',
    });
  }
}
