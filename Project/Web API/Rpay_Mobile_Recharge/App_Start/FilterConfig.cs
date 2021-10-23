using System.Web;
using System.Web.Mvc;

namespace Rpay_Mobile_Recharge
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
