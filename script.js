"use strict";

const features = document.querySelector(".features");
const featuresList = document.querySelector(".features-list");
const navFeatures = document.querySelector(".nav-features");
const navFeaturesList = document.querySelector(".nav-features-list");
const arrow = document.querySelector(".arrow");
const arrow2 = document.querySelector(".arrow-2");
const navCompany = document.querySelector(".nav-company");
const navCompanyList = document.querySelector(".nav-company-list");
const burger = document.querySelector(".fa-bars");
const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const company = document.querySelector(".company");
const companyList = document.querySelector(".company-list");
const header = document.querySelector("header");

burger.addEventListener("click", function () {
  burger.classList.add("hidden");
  menu.classList.remove("hidden");
  header.classList.add("before:absolute", "before:w-screen");
});

close.addEventListener("click", function () {
  menu.classList.add("hidden");
  burger.classList.remove("hidden");
  header.classList.remove("before:absolute", "before:w-screen");
});

features.addEventListener("mouseenter", function () {
  featuresList.classList.remove("hidden");
  console.log(featuresList);
});

features.addEventListener("mouseleave", function () {
  featuresList.classList.add("hidden");
});

company.addEventListener("mouseenter", function () {
  companyList.classList.remove("hidden");
});

company.addEventListener("mouseleave", function () {
  companyList.classList.add("hidden");
});

navFeatures.addEventListener("click", function () {
  navFeaturesList.classList.toggle("hidden");
  arrow.classList.toggle("-rotate-180");
});

navCompany.addEventListener("click", function () {
  navCompanyList.classList.toggle("hidden");
  arrow2.classList.toggle("-rotate-180");
});
