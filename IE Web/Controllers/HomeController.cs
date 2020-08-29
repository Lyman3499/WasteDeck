
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
            ViewBag.Message = "Your application description page.";

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