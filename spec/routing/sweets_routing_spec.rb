require "rails_helper"

RSpec.describe SweetsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/sweets").to route_to("sweets#index")
    end

    it "routes to #show" do
      expect(get: "/sweets/1").to route_to("sweets#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/sweets").to route_to("sweets#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/sweets/1").to route_to("sweets#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/sweets/1").to route_to("sweets#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/sweets/1").to route_to("sweets#destroy", id: "1")
    end
  end
end
