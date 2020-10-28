using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;

namespace IE_Web
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
        }

        protected void Application_Error(object sender, EventArgs e)
        {
            // Sets 404 HTTP exceptions to be handled via IIS (behavior is specified in the "httpErrors" section in the Web.config file)
            Exception exception = Server.GetLastError();
            Response.Clear();
            HttpException httpException = exception as HttpException;
            RouteData route = new RouteData();
            route.Values.Add("controller","Home");

            if (httpException != null)
            {
                if (httpException.GetHttpCode() == 404)
                {
                    route.Values.Add("action","NotFound");
                }
                Server.ClearError();
                Response.TrySkipIisCustomErrors = true;
            }
            IController homecontroller = new Controllers.HomeController();
            homecontroller.Execute(new RequestContext(new HttpContextWrapper(Context), route));
        }

    }
}
