
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


    [BasicAuthenticationAttribute("ma16", "5120", BasicRealm = "your-realm")]
    public class HomeController : Controller
    {
        [ValidateInput(true)]
        public ActionResult Index(String category, String postcode)
        {
            if (category == null && postcode == null)
            {
                return View();
            }
            else
            {
                return RedirectToAction("Vendor", "Home", new { category = category, postcode = postcode });
            }

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

        WasteDeckdatabaseEntities3 db = new WasteDeckdatabaseEntities3();
        [ValidateInput(true)]
        public ActionResult Recycle_Center(String type, String postcode)
        {
            ViewBag.Message = "Recycle Center";
            ViewBag.type = type;
            if (type == null && postcode == null)
            {
                return View(db.RecycleCenters.ToList());
            }
            else if (type == null && postcode != null)
            {
                return View(db.RecycleCenters.Where(x => x.postcode.ToString().Trim().Contains(postcode)));
            }
            else if (type != null && postcode == null)
            {
                return View(db.RecycleCenters.Where(x => x.type.Trim().ToLower().Contains(type)).ToList());
            }
            else
            {
                return View(db.RecycleCenters.Where(x => x.postcode.ToString().Trim().Contains(postcode) && x.type.Trim().ToLower().Contains(type)));
            }

        }

        [ValidateInput(true)]
        public ActionResult Vendor(String category, String postcode)
        {
            ViewBag.Message = "Vendor";
            ViewBag.category = category;
            ViewBag.postcode = postcode;
            if (category == null && postcode == null)
            {
                return View(db.Vendors.ToList());
            }
            else if (category == null && postcode != null)
            {
                return View(db.Vendors.Where(x => x.postcode.ToString().Trim().Contains(postcode)));
            }
            else if (category != null && postcode == null)
            {
                return View(db.Vendors.Where(x => x.category.Trim().ToLower().Contains(category)).ToList());
            }
            else
            {
                return View(db.Vendors.Where(x => x.postcode.ToString().Trim().Contains(postcode) && x.category.Trim().ToLower().Contains(category)));
            }

        }

        public ActionResult Waste_Seperation()
        {
            ViewBag.Message = "Description Page";

            return View();
        }

        public ActionResult Composting()
        {
            ViewBag.Message = "Description Page";

            return View();
        }

        public ActionResult Avoid_Food_Waste()
        {
            ViewBag.Message = "Description Page";

            return View();
        }

        public ActionResult Pot_Farming()
        {
            ViewBag.Message = "Description Page";

            return View();
        }

        public ActionResult Carbon_Footprint()
        {
            ViewBag.Message = "Description Page";

            return View();
        }

        public ActionResult Test_Your_Knowledge()
        {
            ViewBag.Message = "Description Page";

            return View();
        }
        public ActionResult References()
        {
            ViewBag.Message = "Description Page";

            return View();
        }

    }
}