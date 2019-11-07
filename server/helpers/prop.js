_basePicUrl = function(isCip) {
  var p, ref;
  p = (typeof window !== "undefined" && window !== null ? (ref = window.location) != null ? ref.protocol : void 0 : void 0) || 'https:';
  if (isCip) {
    return p + "//img.realmaster.cn";
  } else {
    return p + "//img.realmaster.com";
  }
};

_getSortTimeStamp = function(ts) {
  var str;
  if (ts == null) {
    ts = new Date();
  }
  str = '' + ((new Date(ts)).getTime() / 1000);
  return parseInt(str.substr(3));
};

_ddfPicUrl = function(ml_base, ddfID, num, ts) {
  return ml_base + "/img/" + (ddfID.substr(-3)) + "/" + ddfID + "_" + num + ".jpg?t=" + (_getSortTimeStamp(ts));
};

_trbPicUrl = function(ml_base, ml_num, num, ts) {
  if (num === 1) {
    return ml_base + "/mls/" + num + "/" + (ml_num.slice(-3)) + "/" + ml_num + ".jpg?t=" + (_getSortTimeStamp(ts));
  } else {
    return ml_base + "/mls/" + num + "/" + (ml_num.slice(-3)) + "/" + ml_num + "_" + num + ".jpg?t=" + (_getSortTimeStamp(ts));
  }
};

listingPicUrl = function(prop, isCip, num, w, h) {
  var ml_base;
  if (w == null) {
    w = 160;
  }
  if (h == null) {
    h = 120;
  }
  ml_base = _basePicUrl(isCip);
  if (('ddf' === prop.phosrc) && prop.ddfID) {
    return _ddfPicUrl(ml_base, prop.ddfID.substr(3), num, prop.phomt);
  } else if (('bre' === prop.phosrc) && prop.picUrl && prop.pho) {
    return prop.picUrl.replace('[$width]', w).replace('[$high]', h).replace('[pic#]', num - 1);
  } else {
    return _trbPicUrl(ml_base, prop.sid || ml_num, num, prop.phomt);
  }
};

listingPicUrls = function(prop, isCip, w, h) {
  var brePicUrl, i, j, k, len, ml_base, n, num, o, picAry, ref, ref1, ref2, ref3;
  if (w == null) {
    w = 640;
  }
  if (h == null) {
    h = 480;
  }
  picAry = [];
  if (prop.photonumbers) {
    if (Array.isArray(prop.photonumbers) && prop.photonumbers.length) {
      ref = prop.photonumbers;
      for (j = 0, len = ref.length; j < len; j++) {
        i = ref[j];
        picAry.push("http://trebphotos.stratusdata.com/Live/Default.ashx?type=ListingPhoto&entityName=Listing&entityID=" + prop.sid + "&index=" + i);
      }
    } else {
      picAry.push("http://trebphotos.stratusdata.com/Live/Default.ashx?type=ListingPhoto&entityName=Listing&entityID=" + prop.sid + "&index=" + prop.photonumbers);
    }
  } else if (prop.pho) {
    ml_base = _basePicUrl(isCip);
    if (('ddf' === prop.phosrc) && prop.ddfID) {
      for (num = k = 1, ref1 = prop.pho; 1 <= ref1 ? k <= ref1 : k >= ref1; num = 1 <= ref1 ? ++k : --k) {
        picAry.push(_ddfPicUrl(ml_base, prop.ddfID.substr(3), num, prop.phomt));
      }
    } else if (('bre' === prop.phosrc) && prop.picUrl && prop.pho) {
      brePicUrl = prop.picUrl.replace('[$width]', w).replace('[$high]', h);
      for (num = n = 0, ref2 = prop.pho; 0 <= ref2 ? n < ref2 : n > ref2; num = 0 <= ref2 ? ++n : --n) {
        picAry.push(brePicUrl.replace('[pic#]', num));
      }
    } else {
      for (num = o = 1, ref3 = prop.pho; 1 <= ref3 ? o <= ref3 : o >= ref3; num = 1 <= ref3 ? ++o : --o) {
        picAry.push(_trbPicUrl(ml_base, prop.sid + '', num, prop.phomt));
      }
    }
  }
  return picAry;
};

module.exports = listingPicUrls