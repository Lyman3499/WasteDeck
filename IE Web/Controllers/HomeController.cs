
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using IE_Web.Models;


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
            ViewBag.Message = "Description page.";

            return View();
        }

        public ActionResult Services()
        {
            ViewBag.Message = "Services Page";

            return View();
        }

        public ActionResult Plastic_Alternative()
        {
            ViewBag.Message = "Services Page";

            return View();
        }

        public ActionResult Vendor()
        {
            ViewBag.Message = "Services Page";

            return View();
        }

        public ActionResult Waste_Seperation()
        {
            ViewBag.Message = "Services Page";

            return View();
        }
        public ActionResult Contact()
        {
            return View(new Models.SendEmailViewModel());
        }

        [HttpPost]
        public ActionResult Contact(SendEmailViewModel model)
        {
            if (ModelState.IsValid)
            {
                try
                {               
                    String toEmail = model.ToEmail;
                    String fullname = model.fullname;
                    String contents = model.Contents;
                    Project.Utils.EmailSender es = new Project.Utils.EmailSender();
                    es.Send(toEmail, fullname, contents);

                    ViewBag.Result = "Email has been send to admin.";

                    ModelState.Clear();

                    return View(new SendEmailViewModel());
                }
                catch
                {
                    return View();
                }
            }
            return View();
        }
    }
}