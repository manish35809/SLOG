import React from "react";
import html2canvas from "html2canvas";

const App = () => {
  const [lensDetails, setLensDetails] = React.useState({
    optician: "",
    itemName: "",
    regularPrice: 0,
    costPrice: 0,
    transportation: 0,
    minimumP: 0,
    marginp: 0,
    time: "",
    payment: "",
    deliveryDate: "",
    orderStatus: "",
  });

  const printRef = React.useRef();

  const handleDownloadImage = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);

    const data = canvas.toDataURL("image/jpg");
    const link = document.createElement("a");

    if (typeof link.download === "string") {
      link.href = data;
      link.download = "image.jpg";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };

  return (
    <div className="mx-auto container my-4 px-4 lg:px-12">
      <h1 className="font-medium font-serif text-5xl underline text-violet-900 tracking-widest mb-6 text-center">
        SLOG
      </h1>
      <div className="border-2 p-4 mb-4">
        <div className="mb-2">
          <label
            for="base-input"
            className="block mb-2 text-base text-gray-900 font-bold"
          >
            Optician Name
          </label>
          <input
            type="text"
            id="base-input"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            onChange={(e) =>
              setLensDetails({ ...lensDetails, optician: e.target.value })
            }
          />
        </div>

        <div className="mb-2">
          <label
            for="base-input"
            className="block mb-2 text-base text-gray-900 font-bold"
          >
            Item Name
          </label>
          <input
            type="text"
            id="base-input"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            onChange={(e) =>
              setLensDetails({ ...lensDetails, itemName: e.target.value })
            }
          />
        </div>

        <div className="mb-2">
          <label
            for="base-input"
            className="block mb-2 text-base text-gray-900 font-bold"
          >
            Regular Price
          </label>
          <input
            type="text"
            id="base-input"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            onChange={(e) =>
              setLensDetails({ ...lensDetails, regularPrice: e.target.value })
            }
          />
        </div>

        <div className="mb-2">
          <label
            for="base-input"
            className="block mb-2 text-base text-gray-900 font-bold"
          >
            Cost Price
          </label>
          <input
            type="text"
            id="base-input"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            onChange={(e) =>
              setLensDetails({ ...lensDetails, costPrice: e.target.value })
            }
          />
        </div>

        <div className="mb-2">
          <label
            for="base-input"
            className="block mb-2 text-base text-gray-900 font-bold"
          >
            Margin in %
          </label>
          <input
            type="text"
            id="base-input"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            onChange={(e) =>
              setLensDetails({ ...lensDetails, marginp: e.target.value })
            }
          />
        </div>

        <div className="mb-2">
          <label
            for="base-input"
            className="block mb-2 text-base text-gray-900 font-bold"
          >
            Transportation in ₹
          </label>
          <input
            type="text"
            id="base-input"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            onChange={(e) =>
              setLensDetails({ ...lensDetails, transportation: e.target.value })
            }
          />
        </div>

        <div className="mb-2">
          <label
            for="base-input"
            className="block mb-2 text-base text-gray-900 font-bold"
          >
            Minimum Pairs
          </label>
          <input
            type="text"
            id="base-input"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            onChange={(e) =>
              setLensDetails({ ...lensDetails, minimumP: e.target.value })
            }
          />
        </div>

        <div className="mb-2">
          <label
            for="base-input"
            className="block mb-2 text-base text-gray-900 font-bold"
          >
            Time in Days
          </label>
          <input
            type="text"
            id="base-input"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            onChange={(e) =>
              setLensDetails({ ...lensDetails, time: e.target.value })
            }
          />
        </div>

        <div className="mb-2">
          <label
            for="countries"
            className="block mb-2 text-base font-bold text-gray-900"
          >
            Select an option
          </label>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            onChange={(e) =>
              setLensDetails({ ...lensDetails, payment: e.target.value })
            }
          >
            <option selected="">Payment Options</option>
            <option value="Cash">Cash</option>
            <option value="Advance">Advance</option>
            <option value="Credit">Credit</option>
          </select>
        </div>

        <div className="mb-2">
          <label
            for="countries"
            className="block mb-2 text-base font-bold text-gray-900"
          >
            Select an option
          </label>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            onChange={(e) =>
              setLensDetails({ ...lensDetails, orderStatus: e.target.value })
            }
          >
            <option selected="">Current Status</option>
            <option value="Order Seen">Order Seen</option>
            <option value="Order Placed in Delhi">Order Placed in Delhi</option>
            <option value="Order Dispatched from Delhi">
              Order Dispatched from Delhi
            </option>
            <option value="Order Checked">Order Checked</option>
            <option value="Order Sent to your Location">
              Order Sent to your Location
            </option>
            <option value="Order Delivered">Order Delivered</option>
          </select>
        </div>

        <div className="mb-2">
          <label
            for="base-input"
            className="block mb-2 text-base text-gray-900 font-bold"
          >
            Delivery Date
          </label>
          <input
            type="text"
            id="base-input"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            onChange={(e) =>
              setLensDetails({ ...lensDetails, deliveryDate: e.target.value })
            }
          />
        </div>
      </div>
      <div className="container text-center" ref={printRef}>
        <section className="py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          <div className="container mx-auto">
            <div className="flex flex-col text-center w-full">
              <h1 className="text-xl title-font font-sans font-bold text-slate-50 tracking-wide mb-5">
                {lensDetails.itemName}
              </h1>
            </div>
            <div className="flex flex-wrap mx-4 bg-white text-black mb-4 rounded-2xl">
              <div className="lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center rounded-lg">
                  <div className="flex-grow">
                    <h2 className="font-mono font-bold text-lg">
                      Optician: {lensDetails.optician}
                    </h2>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center rounded-lg">
                  <div className="flex-grow">
                    <h2 className="font-mono font-bold text-lg">
                      Market Price: ₹{lensDetails.regularPrice}
                    </h2>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center rounded-lg">
                  <div className="flex-grow">
                    <h2 className="font-mono font-bold text-lg">
                      Stock Price: ₹
                      {Math.floor(
                        (lensDetails.costPrice / 100) *
                          (100 + parseInt(lensDetails.marginp)) +
                          parseInt(lensDetails.transportation)
                      )}
                    </h2>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center rounded-lg">
                  <div className="flex-grow">
                    <h2 className="font-mono font-bold text-lg">
                      Minumum Order: {lensDetails.minimumP} Pairs
                    </h2>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center rounded-lg">
                  <div className="flex-grow">
                    <h2 className="font-mono font-bold text-lg">
                      Total Amount: ₹
                      {Math.floor(
                        ((lensDetails.costPrice / 100) *
                          (100 + parseInt(lensDetails.marginp)) +
                          parseInt(lensDetails.transportation)) *
                          lensDetails.minimumP
                      )}
                    </h2>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center rounded-lg">
                  <div className="flex-grow">
                    <h2 className="font-mono font-bold text-lg text-green-700">
                      You Save: ₹
                      {Math.floor(
                        lensDetails.regularPrice * lensDetails.minimumP
                      ) -
                        Math.floor(
                          ((lensDetails.costPrice / 100) *
                            (100 + parseInt(lensDetails.marginp)) +
                            parseInt(lensDetails.transportation)) *
                            lensDetails.minimumP
                        )}
                    </h2>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center rounded-lg">
                  <div className="flex-grow">
                    <h2 className="font-mono font-bold text-lg">
                      Payment: {lensDetails.payment}
                    </h2>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center rounded-lg">
                  <div className="flex-grow">
                    <h2 className="font-mono font-bold text-lg">
                      Total Time: {lensDetails.time} Days
                    </h2>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center rounded-lg">
                  <div className="flex-grow">
                    <h2 className="font-mono font-bold text-lg">
                      Delivery Date: {lensDetails.deliveryDate}
                    </h2>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/3 md:w-1/2 w-full pb-4">
                <div className="h-full flex items-center rounded-lg">
                  <div className="flex-grow">
                    <h2 className="font-mono font-bold text-lg">
                      <span
                        className="py-1 px-4 rounded-full text-purple-900
                      "
                      >
                        {lensDetails.orderStatus}
                      </span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="text-center my-4">
        <button
          type="button"
          className="px-6 py-2 text-white text-lg rounded-full shadow-lg bg-gradient-to-r from-cyan-700 to-violet-600"
          onClick={handleDownloadImage}
        >
          Download as Image
        </button>
      </div>
    </div>
  );
};

export default App;
