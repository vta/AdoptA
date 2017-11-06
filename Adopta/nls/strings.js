///////////////////////////////////////////////////////////////////////////
// Copyright © 2016 Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////

define({
  root: ({
    _widgetLabel: "Adopta", //Shown as widget title
    "loginSignUpLabel": "Login/Sign Up", //Shown as label to login button onLoad
    "signUpLabel": "Sign Up", //Shown as label to signup button
    "registeredUserLabel": "Registered User?", //Shown as label for register user link
    "emailPlaceHolderText": "Enter email address (required)", //Shown as placeholder text in email input box
    "teamPlaceHolderText": "Team (optional)", //Shown as placeholder text in teamName input box
    "invalidConfigurationMessage": "Invalid Configuration", //Shown as message in widget panel if configuration is not valid
    "streetAddressLabel": "Street Address", //Shown as title for reverse geocoded address section
    "streetAddressNotFoundText": "No address found", //Show in reverse geocoded address section if address is not found at selected location
    "gpServiceLoginFailedMsg": "An error occurred while signing up. Please try after some time.", //Shown as message if any error occurs while signing up
    "invalidEmailMsg": "Please enter a valid email address.", //Shown as message if invalid email is entered
    "invalidFields": "Please make sure all the fields contain valid values and required fields are not empty.", //Shown as error message when all the required fields from additional fields are not entered
    "unableToAdoptAssetMsg": "Unable to report stop, please try again later.", //Shown as message if any error occurs while adopting an asset
    "nickNameUpdateButtonLabel": "Update", //Shown as label for nickName update button
    "actionFailedMsg": "Unable to perform status ${actionName}", // Shown as meesage in popup when action failed.
    "invalidAppLinkMsg": "Invalid Application link.", //Shown as message in popup if the invalid url parameters are passed
    "noOutputParameterMsg":"Model did not return a response, please ensure there is an output parameter", //Shown as error message in popup when no output parameters are returned from GP service
    "assetConfirmationMsg":"Do you want to save and report this stop?" // Shown as message when user wants to create and adopt new asset
  }),
  "fr": 1
});
