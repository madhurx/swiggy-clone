 async function getLocation() {
  if (navigator.geolocation) {
    console.log(await navigator.geolocation.getCurrentPosition(showPosition, showError));
  } else {
    const m = ["Geolocation is not supported by this browser."];
  }
}

function showPosition(position) {
  let arr = [];
  arr["latitude"] = position.coords.latitude;
  arr["longitude"] = position.coords.longitude;
  return arr;
}

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      return ["User denied the request for Geolocation."];
    case error.POSITION_UNAVAILABLE:
      return ["Location information is unavailable."];
    case error.TIMEOUT:
      return ["The request to get user location timed out."];
    case error.UNKNOWN_ERROR:
      return ["An unknown error occurred."];
    default:
      return ["UNKNOWN REASON"];
  }
}

export const a = getLocation();
