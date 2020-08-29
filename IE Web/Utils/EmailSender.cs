using SendGrid;
using SendGrid.Helpers.Mail;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using static System.Net.WebRequestMethods;

namespace Project.Utils
{
    public class EmailSender
    {
        // Please use your API KEY here.
        private const String API_KEY = "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";

        public void Send(String toEmail, String username, String contents)
        {
            var client = new SendGridClient(API_KEY);
            var from = new EmailAddress(toEmail, "WasteDeck User");
            var to = new EmailAddress("ylii0093@student.monash.edu", "WasteDeck Managers");
            var plainTextContent = contents;
            var htmlContent = "<p>" + contents + "</p>";
            var msg = MailHelper.CreateSingleEmail(from, to, username, plainTextContent, htmlContent);
            var response = client.SendEmailAsync(msg);
        }
    }
}