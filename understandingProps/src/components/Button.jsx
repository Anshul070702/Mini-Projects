// Understanding Props
import React from "react";
function Product({ name1 = "peeche", name2 = "aage" }) {
  return (
    <>
      <div className="w-full border-t border-gray-300">
        <div className="mt-2 flex items-center justify-between">
          <div>
            <p>
              showing <strong>1</strong> to <strong>10</strong> of{" "}
              <strong>20</strong> results
            </p>
          </div>
          <div className="space-x-2">
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              ← {name}
            </button>
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              {name2} →
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Product;
