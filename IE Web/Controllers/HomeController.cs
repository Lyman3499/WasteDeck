
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using IE_Web.Models;


namespace IE_Web.Controllers
{
    public class BasicAuthenticationAttribute : ActionFilterAttribute
    {
        public string BasicRealm { get; set; }
        protected string Username { get; set; }
        protected string Password { get; set; }

        public BasicAuthenticationAttribute(string username, string password)
        {
            this.Username = username;
            this.Password = password;
        }

        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            var req = filterContext.HttpContext.Request;
            var auth = req.Headers["Authorization"];
            if (!String.IsNullOrEmpty(auth))
            {
                var cred = System.Text.ASCIIEncoding.ASCII.GetString(Convert.FromBase64String(auth.Substring(6))).Split(':');
                var user = new { Name = cred[0], Pass = cred[1] };
                if (user.Name == Username && user.Pass == Password) return;
            }
            var res = filterContext.HttpContext.Response;
            res.StatusCode = 401;
            res.AddHeader("WWW-Authenticate", String.Format("Basic realm=\"{0}\"", BasicRealm ?? "Ryadel"));
            res.End();
        }
    }


    [BasicAuthenticationAttribute("ma16","5120", BasicRealm = "your-realm")]
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
            ViewBag.Message = "Description Page";

            return View();
        }

        public ActionResult Plastic_Impact()
        {
            ViewBag.Message = "Description Page";

            return View();
        }

        public ActionResult Vendor()
        {
            ViewBag.Message = "Description Page";

            return View();
        }

        public ActionResult Waste_Seperation()
        {
            ViewBag.Message = "Description Page";

            return View();
        }

        public ActionResult Food_Farming()
        {
            ViewBag.Message = "Description Page";

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