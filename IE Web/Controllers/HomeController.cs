﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace IE_Web.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Serivce()
        {
            ViewBag.Message = "Your application Service 1 page.";

            return View();
        }

        public ActionResult Serivce2()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Serivce3()
        {

            return View();
        }

        public ActionResult Serivce4()
        {

            return View();
        }
        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}