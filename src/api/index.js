const FontFaceObserver = require('fontfaceobserver');

const apiroot = '/service/api';


export function sendData(payload) {
  const { customer, image, items, payment, settings, small } = payload;
  const url = apiroot + '/orders';
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json; charset=utf-8');


  const fetcher = function fetcher(img) {
    return fetch(url, {
            method: 'post',
            headers: myHeaders,
            body: JSON.stringify({
              project: settings.project || 'NTN',
              email: customer.email,
              name: customer.name,
              address: customer.address,
              zip: customer.zip,
              city: customer.city,
              CreditCard: payment.type === 1 ? { number: payment.number, expires: payment.month + payment.year, ccv2: payment.ccv2 } : null,
              signs: [{
                image: img,
                settings: {
                  type: settings.type,
                  backplate: settings.backplate,
                  top: settings.top,
                  right: settings.right,
                  left: settings.left,
                  bottom: settings.bottom
                },
                items: items.map((item)=> {
                  switch (item.type) {
                    case 2:
                      return {
                        type: item.type,
                        value: item.value.map((image) => {
                          return image.image
                        }),
                        scale: item.scale
                      };
                    default:
                      return item;
                  }
                })
              }]
            })
          })
          .then(checkStatus)
          .then(parseJSON);
  };


  return image
          .get()
          .then(function(data) {
            if (data.image && data.image !== 'data:,') {
              return fetcher(data.image);
            }
            else {
              return small
                      .get()
                      .then(function(data) {
                        return fetcher(data.image);
                      });
            }
          });
}

function fetchBase(url) {
  return fetch(url)
           .then(checkStatus)
           .then(parseJSON);

}




export function fetchTexts(project) {
  var fontA = new FontFaceObserver('Cabin Condensed');
  var fontB = new FontFaceObserver('Vidaloka');
  var fontC = new FontFaceObserver('Neucha');
  var fontD = new FontFaceObserver('Lobster');

  const fonts = [fontA, fontB, fontC, fontD];

  const url = apiroot + `/signs/texts/${project}`;

  return Promise.all(fonts.map((f) => f.load())).then(function () {
    return fetchBase(url);
  });
}

export function fetchPrices(project) {
  const url = apiroot + `/signs/prices/${project}`;

  return fetchBase(url);
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  console.log(error); // eslint-disable-line no-console
  throw error;
}

function parseJSON(response) {
  return response.json();
}
