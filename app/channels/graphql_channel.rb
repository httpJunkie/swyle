class GraphqlChannel < ApplicationCable::Channel
  def subscribed
    @subscription_ids = []
  end

  def execute(data)
  result = execute_query(data)

  payload = {
    result: result.subscription? ? { data: nil } : result.to_h,
    more: result.subscription?
  }

  @subscription_ids << context[:subscription_id] if result.context[:subscription_id]

  transmit(payload) 
 end

  def unsubscribed
  end
end
