//
//  StringExtension.swift
//  simplepin
//
//  Created by Mathias Lindholm on 4.4.2016.
//  Copyright © 2016 Mathias Lindholm. All rights reserved.
//

import Foundation

extension String {
    var stringToDate: NSDate? {
        let formatter = NSDateFormatter()
        formatter.dateFormat = "yyyy-MM-dd'T'HH:mm:ssZ"
        return formatter.dateFromString(self)
    }

    var sentencecaseString: String {
        if isEmpty { return "" }
        let lowercaseString = self.lowercaseString
        return lowercaseString.stringByReplacingCharactersInRange(lowercaseString.startIndex...lowercaseString.startIndex, withString: String(lowercaseString[lowercaseString.startIndex]).uppercaseString)
    }

    var removeExcessiveSpaces: String {
        let components = self.componentsSeparatedByCharactersInSet(NSCharacterSet.whitespaceCharacterSet())
        let filtered = components.filter({!$0.isEmpty})
        return filtered.joinWithSeparator(" ")
    }

    var stringToBool: Bool {
        return NSString(string: self).boolValue
    }
}