Template.icon.helpers({
  icon: function () {
    if (Meteor.isAndroid) {
    	return this.android;
    } else if (Meteor.isIos) {
    	return this.ios;
    } else if (Meteor.isMac) {
    	return this.mac;
    } else if (Meteor.isWindowsPhone) {
    	return this.windowsPhone;
    } else if (Meteor.isWindows) {
    	return this.windows;
    } else {
    	return this.default;
    }
  }
});