// $(".footer-links-wrapper h3")
//   .eq(0)
//   .click(function () {
//     $(".footer-links-wrapper ul").eq(0).toggle();
//     $(".footer-links-wrapper h3").eq(0).toggleClass("expanded");
//   });
// $(".footer-links-wrapper h3")
//   .eq(1)
//   .click(function () {
//     $(".footer-links-wrapper ul").eq(1).toggle();
//     $(".footer-links-wrapper h3").eq(1).toggleClass("expanded");
//   });
// $(".footer-links-wrapper h3")
//   .eq(2)
//   .click(function () {
//     $(".footer-links-wrapper ul").eq(2).toggle();
//     $(".footer-links-wrapper h3").eq(2).toggleClass("expanded");
//   });
// $(".footer-links-wrapper h3")
//   .eq(3)
//   .click(function () {
//     $(".footer-links-wrapper ul").eq(3).toggle();
//     $(".footer-links-wrapper h3").eq(3).toggleClass("expanded");
//   });
// $(".footer-links-wrapper h3")
//   .eq(4)
//   .click(function () {
//     $(".footer-links-wrapper ul").eq(4).toggle();
//     $(".footer-links-wrapper h3").eq(4).toggleClass("expanded");
//   });

// $(".footer-links-wrapper h3").click(function () {
//   // Get the index of the clicked h3 element
//   let index = $(this).index();

//   // Toggle the corresponding ul element and h3 class
//   $(".footer-links-wrapper ul").eq(index).toggle();
//   $(this).toggleClass("expanded");
// });

// $(".footer-links-wrapper h3").click(function () {
//   $(this).next().slideToggle();

//   $(this).toggleClass("expanded");
// });

footerLinksWrapper.find("h3").on("click", function () {
  let list = $(this).siblings("ul");

  list.slideToggle(1000); // Toggle visibility of the ul
  $(this).toggleClass("expanded"); // Toggle class on the clicked h3
});
