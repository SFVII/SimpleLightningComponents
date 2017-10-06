({
    fetchSObjectMetadata : function(component, event) {
        var action = component.get("c.getSObjectMetadata");
        action.setParams({
            "sobjectName": component.get("v.sobjectName")
        });
        action.setStorable();
        action.setCallback(this, function(response) {
            if (response.getState() == "SUCCESS") {
                var sobjectMetadata = response.getReturnValue();
                component.set('v.sobjectMetadata', sobjectMetadata);
                component.set('v.label', sobjectMetadata.sobjectLabel);
                component.set('v.labelPlural', sobjectMetadata.sobjectLabelPlural);
            }
        });
        $A.enqueueAction(action);
    }
})