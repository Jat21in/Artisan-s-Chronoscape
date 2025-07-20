"use client"

import { useState } from "react"
import { Bell, Shield, Globe, Moon, Sun, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SettingsPage() {
  const [notifications, setNotifications] = useState({
    orderUpdates: true,
    newArrivals: true,
    artisanStories: false,
    promotions: true,
    emailDigest: true,
    smsUpdates: false,
  })

  const [privacy, setPrivacy] = useState({
    profileVisibility: "private",
    showPurchaseHistory: false,
    allowDataCollection: true,
    marketingEmails: true,
  })

  const [preferences, setPreferences] = useState({
    language: "en",
    currency: "USD",
    theme: "light",
    timezone: "America/New_York",
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-serif font-light text-gray-900 mb-4">Settings</h1>
          <p className="text-lg text-gray-600">Manage your account preferences and privacy settings</p>
        </div>

        <Tabs defaultValue="notifications" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="privacy">Privacy</TabsTrigger>
            <TabsTrigger value="preferences">Preferences</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
          </TabsList>

          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Bell className="w-5 h-5" />
                  <span>Notification Settings</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="order-updates" className="text-base font-medium">
                        Order Updates
                      </Label>
                      <p className="text-sm text-gray-600">Get notified about order status changes</p>
                    </div>
                    <Switch
                      id="order-updates"
                      checked={notifications.orderUpdates}
                      onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, orderUpdates: checked }))}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="new-arrivals" className="text-base font-medium">
                        New Arrivals
                      </Label>
                      <p className="text-sm text-gray-600">Be the first to know about new products</p>
                    </div>
                    <Switch
                      id="new-arrivals"
                      checked={notifications.newArrivals}
                      onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, newArrivals: checked }))}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="artisan-stories" className="text-base font-medium">
                        Artisan Stories
                      </Label>
                      <p className="text-sm text-gray-600">Weekly newsletter with artisan features</p>
                    </div>
                    <Switch
                      id="artisan-stories"
                      checked={notifications.artisanStories}
                      onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, artisanStories: checked }))}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="promotions" className="text-base font-medium">
                        Promotions & Offers
                      </Label>
                      <p className="text-sm text-gray-600">Special deals and exclusive offers</p>
                    </div>
                    <Switch
                      id="promotions"
                      checked={notifications.promotions}
                      onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, promotions: checked }))}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="email-digest" className="text-base font-medium">
                        Email Digest
                      </Label>
                      <p className="text-sm text-gray-600">Weekly summary of your activity</p>
                    </div>
                    <Switch
                      id="email-digest"
                      checked={notifications.emailDigest}
                      onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, emailDigest: checked }))}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="sms-updates" className="text-base font-medium">
                        SMS Updates
                      </Label>
                      <p className="text-sm text-gray-600">Text messages for urgent updates</p>
                    </div>
                    <Switch
                      id="sms-updates"
                      checked={notifications.smsUpdates}
                      onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, smsUpdates: checked }))}
                    />
                  </div>
                </div>

                <Button className="bg-amber-600 hover:bg-amber-700">Save Notification Settings</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="privacy">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="w-5 h-5" />
                  <span>Privacy Settings</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="profile-visibility" className="text-base font-medium">
                      Profile Visibility
                    </Label>
                    <p className="text-sm text-gray-600 mb-2">Control who can see your profile information</p>
                    <Select
                      value={privacy.profileVisibility}
                      onValueChange={(value) => setPrivacy((prev) => ({ ...prev, profileVisibility: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="public">Public</SelectItem>
                        <SelectItem value="private">Private</SelectItem>
                        <SelectItem value="friends">Friends Only</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="purchase-history" className="text-base font-medium">
                        Show Purchase History
                      </Label>
                      <p className="text-sm text-gray-600">Allow others to see your collection</p>
                    </div>
                    <Switch
                      id="purchase-history"
                      checked={privacy.showPurchaseHistory}
                      onCheckedChange={(checked) => setPrivacy((prev) => ({ ...prev, showPurchaseHistory: checked }))}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="data-collection" className="text-base font-medium">
                        Allow Data Collection
                      </Label>
                      <p className="text-sm text-gray-600">Help us improve your experience</p>
                    </div>
                    <Switch
                      id="data-collection"
                      checked={privacy.allowDataCollection}
                      onCheckedChange={(checked) => setPrivacy((prev) => ({ ...prev, allowDataCollection: checked }))}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="marketing-emails" className="text-base font-medium">
                        Marketing Emails
                      </Label>
                      <p className="text-sm text-gray-600">Receive promotional content</p>
                    </div>
                    <Switch
                      id="marketing-emails"
                      checked={privacy.marketingEmails}
                      onCheckedChange={(checked) => setPrivacy((prev) => ({ ...prev, marketingEmails: checked }))}
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    Download My Data
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    Request Data Deletion
                  </Button>
                </div>

                <Button className="bg-amber-600 hover:bg-amber-700">Save Privacy Settings</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="preferences">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="w-5 h-5" />
                  <span>Preferences</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="language" className="text-base font-medium">
                      Language
                    </Label>
                    <Select
                      value={preferences.language}
                      onValueChange={(value) => setPreferences((prev) => ({ ...prev, language: value }))}
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="es">Español</SelectItem>
                        <SelectItem value="fr">Français</SelectItem>
                        <SelectItem value="de">Deutsch</SelectItem>
                        <SelectItem value="ja">日本語</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="currency" className="text-base font-medium">
                      Currency
                    </Label>
                    <Select
                      value={preferences.currency}
                      onValueChange={(value) => setPreferences((prev) => ({ ...prev, currency: value }))}
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="USD">USD ($)</SelectItem>
                        <SelectItem value="EUR">EUR (€)</SelectItem>
                        <SelectItem value="GBP">GBP (£)</SelectItem>
                        <SelectItem value="JPY">JPY (¥)</SelectItem>
                        <SelectItem value="CAD">CAD ($)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="theme" className="text-base font-medium">
                      Theme
                    </Label>
                    <Select
                      value={preferences.theme}
                      onValueChange={(value) => setPreferences((prev) => ({ ...prev, theme: value }))}
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">
                          <div className="flex items-center space-x-2">
                            <Sun className="w-4 h-4" />
                            <span>Light</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="dark">
                          <div className="flex items-center space-x-2">
                            <Moon className="w-4 h-4" />
                            <span>Dark</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="system">
                          <div className="flex items-center space-x-2">
                            <Smartphone className="w-4 h-4" />
                            <span>System</span>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="timezone" className="text-base font-medium">
                      Timezone
                    </Label>
                    <Select
                      value={preferences.timezone}
                      onValueChange={(value) => setPreferences((prev) => ({ ...prev, timezone: value }))}
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="America/New_York">Eastern Time</SelectItem>
                        <SelectItem value="America/Chicago">Central Time</SelectItem>
                        <SelectItem value="America/Denver">Mountain Time</SelectItem>
                        <SelectItem value="America/Los_Angeles">Pacific Time</SelectItem>
                        <SelectItem value="Europe/London">GMT</SelectItem>
                        <SelectItem value="Europe/Paris">CET</SelectItem>
                        <SelectItem value="Asia/Tokyo">JST</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button className="bg-amber-600 hover:bg-amber-700">Save Preferences</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="w-5 h-5" />
                  <span>Security Settings</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="current-password" className="text-base font-medium">
                      Change Password
                    </Label>
                    <div className="space-y-3 mt-2">
                      <Input type="password" placeholder="Current password" />
                      <Input type="password" placeholder="New password" />
                      <Input type="password" placeholder="Confirm new password" />
                      <Button variant="outline" className="bg-transparent">
                        Update Password
                      </Button>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <Label className="text-base font-medium">Two-Factor Authentication</Label>
                    <p className="text-sm text-gray-600 mb-3">Add an extra layer of security to your account</p>
                    <Button variant="outline" className="bg-transparent">
                      Enable 2FA
                    </Button>
                  </div>

                  <div className="border-t pt-4">
                    <Label className="text-base font-medium">Active Sessions</Label>
                    <p className="text-sm text-gray-600 mb-3">Manage devices that are signed into your account</p>
                    <Button variant="outline" className="bg-transparent">
                      View Active Sessions
                    </Button>
                  </div>

                  <div className="border-t pt-4">
                    <Label className="text-base font-medium">Account Deletion</Label>
                    <p className="text-sm text-gray-600 mb-3">Permanently delete your account and all data</p>
                    <Button variant="destructive">Delete Account</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
