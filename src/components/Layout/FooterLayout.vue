<template>
  <div>
    <pre-footer />
    <div class="container">
      <div class="footer">
        <div class="row" align-h="center">
          <div class="col-lg-3 col-md-6 col-sm-6">
            <!-- contact -->
            <div class="contact">
              <div>
                <img src="@/assets/logo-2.png" alt="logo" />
              </div>
              <div>
                <div
                  class="contact-info"
                  v-for="contact in contactInfo"
                  :key="contact.title"
                >
                  <div>{{ contact.title }}:</div>
                  <div>{{ contact.value }}</div>
                </div>
              </div>

              <div class="social-media">
                <div
                  class="media"
                  v-for="media in socialMedia"
                  :key="media.name"
                >
                  <a :href="'//' + media.link" target="_blank">
                    <img :src="media.icon" :alt="media.name" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 col-sm-6">
            <!-- info -->
            <h4>information</h4>
            <div class="information">
              <div class="info" v-for="info in information" :key="info.title">
                <a :href="info.link">{{ info.title }}</a>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 col-sm-6">
            <!-- account -->
            <h4>account details</h4>
            <div class="account-details">
              <div
                class="details"
                v-for="contact in accountDetails"
                :key="contact.title"
              >
                <a :href="contact.link">{{ contact.title }}</a>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 col-sm-6 order-md-2">
            <!-- payments -->
            <h4>safe payments</h4>
            <div class="payment-methods">
              <div
                class="payment"
                v-for="payment in payments"
                :key="payment.name"
              >
                <img :src="payment.logo" :alt="payment.name" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer {
  padding: 40px 0;
}

.footer .contact,
.footer .information,
.footer .account-details,
.footer .payment-methods {
  margin-bottom: 30px;
}

.footer .contact {
  display: flex;
  flex-direction: column;
  gap: 15px;
  color: #9d9d9c;
}
.footer .contact .contact-info {
  display: flex;
  flex-direction: row;
  gap: 3px;
  align-items: center;
  margin: 5px 0;
}
.footer .contact .social-media {
  display: flex;
  flex-direction: row;
  gap: 10px;
}
.footer .contact .media {
  width: 20px;
  height: 20px;
}
.footer .contact .media img {
  width: 100%;
  height: 100%;
}
.footer h4 {
  text-transform: capitalize;
  margin-bottom: 15px;
}

.footer .information,
.footer .account-details {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.footer .information .info a,
.footer .account-details .details a {
  text-transform: capitalize;
  color: #9d9d9c;
  font-size: 18px;
  font-weight: 600px;
}

.footer .payment-methods {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 15px;
}
.footer .payment-methods .payment {
  height: 65px;
  width: 65px;
}
.footer .payment-methods .payment img {
  width: 100%;
  height: 100%;
}

@media (max-width: 992px) {
  .footer .payment-methods {
    flex-direction: column;
  }
}
</style>

<script>
import PreFooter from "@/components/Layout/PreFooter.vue";
import FacebookLogo from "@/assets/icons/social-media/facebook-black.svg";
import TwitterLogo from "@/assets/icons/social-media/twitter-black.svg";
import InstagramLogo from "@/assets/icons/social-media/instagram-black.svg";
import LinkedInLogo from "@/assets/icons/social-media/linkedin-black.svg";
import visa from "@/assets/icons/visa.svg";
export default {
  name: "FooterLayout",
  data() {
    return {
      contactInfo: [
        {
          title: "E-mail",
          value: "Foxshop@gmail.com",
        },
        {
          title: "Hours",
          value: "10:00-18:00 Mon-Fri",
        },
      ],
      socialMedia: [
        {
          name: "facebook",
          icon: FacebookLogo,
          link: "www.facebook.com",
        },
        {
          name: "twitter",
          icon: TwitterLogo,
          link: "www.twitter.com",
        },
        {
          name: "insragram",
          icon: InstagramLogo,
          link: "www.insragram.com",
        },
        {
          name: "linkedin",
          icon: LinkedInLogo,
          link: "www.linkedin.com",
        },
      ],
      information: [
        {
          title: "about us",
          link: "/about",
        },
        {
          title: "contact us",
          link: "/contact",
        },
        {
          title: "terms & conditions",
          link: "/terms",
        },
        {
          title: "shipping & delivery",
          link: "/shipping",
        },
      ],
      accountDetails: [
        {
          title: "my account",
          link: "/account",
        },
        {
          title: "view cart",
          link: "/cart",
        },
        {
          title: "my wishlist",
          link: "/wishlist",
        },
        {
          title: "track order",
          link: "/order/track",
        },
      ],
      payments: [
        {
          name: "visa",
          logo: visa,
        },
        {
          name: "visa 1",
          logo: visa,
        },
        {
          name: "visa 2",
          logo: visa,
        },
      ],
    };
  },
  components: {
    PreFooter,
  },
};
</script>
