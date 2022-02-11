const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const headerClass = document.createElement("div");
  const dateClass = document.createElement("span");
  const h1Element = document.createElement("h1");
  const tempClass = document.createElement("span");

  headerClass.classList.add("header");
  dateClass.classList.add("date");
  tempClass.classList.add("temp");

  dateClass.textContent = date;
  h1Element.textContent = title;
  tempClass.textContent = temp;

  headerClass.appendChild(dateClass);
  headerClass.appendChild(h1Element);
  headerClass.appendChild(tempClass);

  return headerClass;
};

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

  document
    .querySelector(selector)
    .appendChild(Header("Lambda Times", "January 6, 2011", "26"));
};

export { Header, headerAppender };
